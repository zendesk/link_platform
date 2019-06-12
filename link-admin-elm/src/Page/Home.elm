module Page.Home exposing (Model, Msg, init, toSession, update, view)

import Api
import Api.Endpoint as Endpoint
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onClick)
import Http
import Json.Decode as Decode
import Log
import Organization exposing (Organization, Preview)
import PaginatedList exposing (PaginatedList)
import Route
import Session exposing (Session)
import Task exposing (Task)


type alias Model =
    { session : Session
    , orgPage : Int

    -- Loaded independently from server
    , organizations : Status (PaginatedList (Organization Preview))
    }


type Status a
    = Loading
    | LoadingSlowly
    | Loaded a
    | Failed


type Msg
    = CompletedOrganizationsLoad (Result Http.Error (PaginatedList (Organization Preview)))
    | ClickedOrganizationPage Int


init : Session -> ( Model, Cmd Msg )
init session =
    ( { session = session, organizations = Loading, orgPage = 1 }, fetchOrganizations session 1 )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        CompletedOrganizationsLoad (Ok organizations) ->
            ( { model | organizations = Loaded organizations }, Cmd.none )

        CompletedOrganizationsLoad (Err err) ->
            let
                errStr =
                    Debug.log "err" err
            in
            ( { model | organizations = Failed }, Log.error )

        ClickedOrganizationPage page ->
            ( { model | orgPage = page }, fetchOrganizations model.session page )


view : Model -> { title : String, content : Html Msg }
view model =
    { title = "Organizations"
    , content = content model
    }


content : Model -> Html Msg
content model =
    div [ class "droparea" ]
        [ div [ class "info-text" ]
            [ h2 []
                [ text "Organizations" ]
            , div
                []
              <|
                case model.organizations of
                    Loaded organizations ->
                        [ viewOrganizations (PaginatedList.values organizations), viewPagination ClickedOrganizationPage organizations ]

                    Loading ->
                        []

                    LoadingSlowly ->
                        [ text "Loading..." ]

                    Failed ->
                        [ text "Failed to load" ]
            ]
        ]


viewOrganizations : List (Organization Preview) -> Html Msg
viewOrganizations organizations =
    div [] (List.map viewOrg organizations)


viewOrg : Organization Preview -> Html Msg
viewOrg org =
    a
        [ (Route.href << Route.Organization) (Organization.slug org)
        ]
        [ text (Organization.metadata org).title
        ]


viewPagination : (Int -> Msg) -> PaginatedList a -> Html Msg
viewPagination toMsg list =
    text "pagination controls"



-- HTTP


fetchOrganizations : Session -> Int -> Cmd Msg
fetchOrganizations session page =
    let
        maybeCred =
            Session.cred session

        decoder =
            Organization.decoder maybeCred organizationsPerPage

        params =
            PaginatedList.params { page = page, resultsPerPage = organizationsPerPage }
    in
    Api.get (Endpoint.organizations params) maybeCred CompletedOrganizationsLoad decoder


organizationsPerPage : Int
organizationsPerPage =
    10



-- EXPORT


toSession model =
    model.session
