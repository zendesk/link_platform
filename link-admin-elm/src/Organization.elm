module Organization exposing (Full, Organization, Preview, decoder, fullDecoder, metadata, slug)

import Api exposing (Cred)
import Api.Endpoint as Endpoint
import Http
import Iso8601
import Json.Decode as Decode exposing (Decoder, field)
import Json.Decode.Pipeline exposing (custom, hardcoded, required)
import Organization.Form as Form exposing (Form)
import Organization.Slug as Slug exposing (Slug)
import PaginatedList exposing (PaginatedList)
import Time


type Organization a
    = Organization Internals a


type alias Metadata =
    { description : String
    , title : String
    , createdAt : Time.Posix
    }


type alias Internals =
    { slug : Slug
    , metadata : Metadata
    }


type Preview
    = Preview


type Full
    = Full Form



-- INFO


metadata : Organization a -> Metadata
metadata (Organization internals _) =
    internals.metadata


slug : Organization a -> Slug
slug (Organization internals _) =
    internals.slug



-- Serialization


decoder : Maybe Cred -> Int -> Decoder (PaginatedList (Organization Preview))
decoder maybeCred resultsPerPage =
    Decode.succeed PaginatedList.fromList
        |> required "organization_count" (pageCountDecoder resultsPerPage)
        |> required "organizations" (Decode.list (previewDecoder maybeCred))


pageCountDecoder : Int -> Decoder Int
pageCountDecoder resultsPerPage =
    Decode.int
        |> Decode.map (\total -> ceiling (toFloat total / toFloat resultsPerPage))


fullDecoder : Maybe Cred -> Decoder (Organization Full)
fullDecoder maybeCred =
    Decode.succeed Organization
        |> custom (internalsDecoder maybeCred)
        |> required "description" (Decode.map Full Form.decoder)


previewDecoder : Maybe Cred -> Decoder (Organization Preview)
previewDecoder maybeCred =
    Decode.succeed Organization
        |> custom (internalsDecoder maybeCred)
        |> hardcoded Preview


internalsDecoder : Maybe Cred -> Decoder Internals
internalsDecoder maybeCred =
    Decode.succeed Internals
        |> required "id" Slug.decoder
        |> custom metadataDecoder


metadataDecoder : Decoder Metadata
metadataDecoder =
    Decode.succeed Metadata
        |> required "description" (Decode.map (Maybe.withDefault "") (Decode.nullable Decode.string))
        |> required "name" Decode.string
        |> required "created_at" Iso8601.decoder



-- SINGLE


fetch : Maybe Cred -> (Result Http.Error (Organization Full) -> msg) -> Slug -> Cmd msg
fetch maybeCred toMsg organizationSlug =
    Api.get (Endpoint.organization organizationSlug) maybeCred toMsg (fullDecoder maybeCred)
