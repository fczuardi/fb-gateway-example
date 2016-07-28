module.exports = {
    verifyToken: 'YOUR_VERIFY_TOKEN',
    xHubSecret: 'YOUR_FB_APP_SECRET',
    xHubAlgo: 'sha1',
    messages: {
        missingQueryString: 'Missing querystring',
        validationFailed: 'Failed validation. Make sure the validation tokens match.',
        wrongSignature: 'X-Hub-Signatures do not match.'
    }
};
