module Organization.Form exposing (Form, decoder, toHtml)

import Html exposing (Attribute, Html, div, text)
import Html.Attributes
import Json.Decode as Decode exposing (Decoder)


type Form
    = Form



-- CONVERSIONS


toHtml : Form -> List (Attribute msg) -> Html msg
toHtml form attributes =
    div [] [ text "name" ]


decoder : Decoder Form
decoder =
    Decode.succeed Form
