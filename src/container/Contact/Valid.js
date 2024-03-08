export default function Valid(forminfo) {
    const validationErrors = {};
    if (!forminfo.username) {
        validationErrors.username = "Username is required";
    }
    if (!forminfo.email) {
        validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(forminfo.email)) {
        validationErrors.email = "Invalid email address";
    }
    if (!/^\d{10}$/.test(forminfo.contactVal)) {
        validationErrors.contactVal = "Contact number should be 10 digits";
    }
    if (!forminfo.message) {
        validationErrors.message = "Message is required";
    }
    if (Object.keys(validationErrors).length > 0) {
        return validationErrors;
    } else {
        return "All Good";
    }
}
