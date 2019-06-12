module Page.Organization exposing (Model, Msg, init, toSession, update, view)

import Api
import Api.Endpoint as Endpoint
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Http
import Json.Decode as Decode
import Log
import Organization exposing (Full, Organization)
import Organization.Slug exposing (Slug)
import Route
import Session exposing (Session)
import Task exposing (Task)


type alias Model =
    { session : Session

    -- Loaded independently from server
    , organization : Status (Organization Full)
    }


type Status a
    = Loading
    | LoadingSlowly
    | Loaded a
    | Failed


type Msg
    = CompletedOrganizationLoad (Result Http.Error (Organization Full))


init : Slug -> Session -> ( Model, Cmd Msg )
init orgSlug session =
    ( { session = session, organization = Loading }, fetchOrganization session orgSlug )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CompletedOrganizationLoad (Ok organization) ->
            ( { model | organization = Loaded organization }, Cmd.none )

        CompletedOrganizationLoad (Err err) ->
            let
                errStr =
                    Debug.log "err" err
            in
            ( { model | organization = Failed }, Log.error )


view : Model -> { title : String, content : Html Msg }
view model =
    { title = "Organization"
    , content = content model
    }


content : Model -> Html Msg
content model =
    div []
        [ div [ class "info-text" ]
            [ h2 []
                [ text "Organization" ]
            , div
                []
              <|
                case model.organization of
                    Loaded organization ->
                        [ viewOrganization organization ]

                    Loading ->
                        []

                    LoadingSlowly ->
                        [ text "Loading..." ]

                    Failed ->
                        [ text "Failed to load" ]
            ]
        ]


viewOrganization : Organization Full -> Html Msg
viewOrganization organization =
    text (Organization.metadata organization).title



-- HTTP


fetchOrganization : Session -> Slug -> Cmd Msg
fetchOrganization session orgSlug =
    let
        maybeCred =
            Session.cred session

        decoder =
            Organization.fullDecoder maybeCred
    in
    Api.get (Endpoint.organization orgSlug) maybeCred CompletedOrganizationLoad decoder



-- EXPORT


toSession model =
    model.session
