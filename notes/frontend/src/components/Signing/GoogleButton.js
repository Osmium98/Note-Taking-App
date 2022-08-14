import { Auth } from "aws-amplify";

const GoogleButton = () => {

    const handleClick = async () => {
        try {
            await Auth.federatedSignIn({ provider: "google" });
        } catch (e) {
            console.log(e);
        }
    };

    return (<button onClick={handleClick}>
        GOOGLE
    </button>)
};

export default GoogleButton;