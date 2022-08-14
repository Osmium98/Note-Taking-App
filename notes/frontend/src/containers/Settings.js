import React from "react";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Settings.css"

export default function Settings() {

    function billUser(details) {
        return API.post("notes", "/billing", {
            body: details,
        });
    }

    return (
        <div className="Settings">
            <LinkContainer to="/settings/email">
                <LoaderButton block bsSize="large">
                    Change Email
                </LoaderButton>
            </LinkContainer>
            <LinkContainer to="/settings/password">
                <LoaderButton block bsSize="large">
                    Change Password
                </LoaderButton>
            </LinkContainer>
        </div>
    );
}