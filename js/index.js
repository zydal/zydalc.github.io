document.addEventListener('DOMContentLoaded', function() {
    $( "#terms-of-service" ).click(function( event ) {
        event.preventDefault();
        window.location.hash = "#terms-of-service";
        openTermsModal();
    });
    $( "#privacy-police" ).click(function( event ) {
        event.preventDefault();
        window.location.hash = "#privacy-police";
        openPrivatePolicyModal();
    });

    switch (location.hash) {
        case "#terms-of-service" : {
            openTermsModal();
            break;
        }
        case "#privacy-police": {
            openPrivatePolicyModal();
            break;
        }
        case "#about": {
            openAboutModal();
            break;
        }
    }
});

function scrollToTop() {
   $(".vex").animate({ scrollTop: 50 }, "slow");
}

function openAboutModal() {
    window.location.hash = "#about";
    vex.dialog.alert({
        unsafeMessage: '<h2>Wallet intro</h2>' +
        '<br>' +
        'Guarda wallet is go-to ethereum wallet designed to store, manage, send/receive ether. The security is the wallet key feature. We are not keeping user’s private key and user’s money hence. All keys are located only on user device.\n' +
        '<br>' +
        'User can easily access the various features of Guarda wallet with intuitive interface. From the app you can manage, send and receive ether, view your address and check the actual balance.<br>' +
        '<br>' +
        'We are operating own Ethereum nodes that make service of wallet more reliable. <br>' +
        '<br>' +
        'Guarda is planning to release iOS application and add new coins this year, including Ethereum Classic, Bitcoin, Monero, Litecoin, Zcash.\n' +
        '<br><br>' +
        '<h5>About Company</h5>' +
        'Founded in 2017, Guarda is innovation company focused on blockchain technologies. Founded by blockchain enthusiasts, based in EU. We have on board professionals from IT, blockchain and fintech that is key success factor for building exciting blockchain services.',
        callback: function (value) {
            clearHash();
        }
    });
    scrollToTop();
}

function openPrivatePolicyModal() {
    vex.dialog.alert({
        unsafeMessage: '<h2>Privacy Policy</h2><br>' +
        '<h3>1. Principles:</h3>' +
        'a) Privacy is a human right and software should help protect your rights. <br>b) We don’t require you to register or log in. <br>c) We don’t have access to your funds (private keys). <br>d) We don’t require your name or email address.' +
        '<h3>2. Registration/Login Not Required</h3>' +
        'Guarda Wallet does not require you to register or log in.\n' +
        '<h3>3. Private Keys Stay on Device</h3>' +
        'Your private keys will stay on your device.\n' +
        '<h3>4. Camera Data Stays on Device</h3>' +
        'Your camera will only be used for reading QR codes. Camera images will never leave your device.\n' +
        '<h3>5. Physical Location</h3>' +
        'Your physical location will never be communicated to us, unless you provide prior specific consent.\n' +
        '<h3>6. Blockchain Transactions</h3>' +
        'Your blockchain transactions may be relayed through servers (“nodes”) and will be publicly visible due to the public nature of distributed ledger systems.\n' +
        '<h3>7. Secure Communication with Our Servers</h3>' +
        'All of our servers support HTTPS.\n' +
        '<h3>8. Communication with Third-Party Servers</h3>' +
        'Exchange rates, balances, transactions and other blockchain information may be read from, or relayed to, third-party servers. We cannot guarantee the privacy of your Internet connection.\n' +
        '<h3>9. Third-Party Services</h3>' +
        'Guarda Wallet has software integrations with third-party services that you may choose to use, for example, Shapeshift. If you do use third-party services through Guarda Wallet then they will be clearly marked and there may be other terms or privacy policies that apply.\n' +
        '<h3>10. Aggregate Usage Statistics</h3>' +
        'We may collect Guarda Wallet usage information in order to improve function or UI, but will only use this information in an aggregated, anonymized fashion, and never in association with your name, email, or other personally identifying information.\n' +
        '<h3>11. Optional Extra PII (Personally Identifying Information)</h3>' +
        'You may choose to provide us with personally identifying information in order to participate in certain programs, activate features, or obtain other benefits but you will always be able to use the basic features of Guarda Wallet without providing personally identifying information. If you provide us with personally identifying information then, notwithstanding any part of this policy, we may use that information in order to provide you with services or to improve the functioning or UI of Guarda Wallet.\n' +
        '<h3>12. All User Information is Confidential</h3>' +
        'Your personally identifying information will be kept strictly confidential and never provided to third parties (other than in an aggregated, anonymized report such as number of users per month).\n' +
        'All Guarda Wallet staff are bound by confidentiality agreements.\n' +
        '\n' +
        '<h3>13. Support Requests</h3>' +
        'If you contact support then as part of the support request we may incidentally collect your personally identifying information but we will endeavor to keep that information secure and confidential. Support information may be managed using a third-party service and further terms of that service may apply to your support request.\n' +
        ' Guarda Wallet reserves the right to change or amend any part of its Privacy Policy at any time without prior notice',
        callback: function (value) {
            clearHash();
        }
    });
    scrollToTop();
}



function openTermsModal() {
    vex.dialog.alert({
        unsafeMessage: '<h2>Terms of Service</h2>' +
        '<h3>1. Parties</h3> ' +
        'This agreement is between you ( \"You \" or  \"Your \" in this agreement) and Guarda Wallet service.\n' +
        '<br>' +
        '<h3>2. Service Offered</h3> ' +
        'Software Developer has created a means for users to access, and transfer ownership of, virtual currency tokens (such as bitcoins) under the name  \"Guarda Wallet \". By entering into this agreement You will receive a license to use the Guarda Wallet.' +
        ' You should only use the Guarda Wallet if you are familiar with virtual currencies. Software Developer highly recommends learning the basics of the specific virtual currency that you plan on using with the Guarda Wallet before running the Guarda Wallet. The Guarda Wallet is licensed to you without charge.\n' +
        '<h3>3. You Own Your Private Keys</h3>' +
        'Software Developer does not store users\' private keys, backup phrases or passwords ( \"Private Information \"). It is very important that You backup Private Information.' +
        ' If You lose Your Private Information then it will not be possible for Software Developer to recover it for You and You may lose access to Your virtual currency tokens.If You do not understand the above paragraph then Software Developer recommends that You learn more about virtual currencies before using the Guarda Wallet.\n' +
        '<br>' +
        '<h3>4. User Obligations</h3> ' +
        'You shall:  <br>a) be of age of majority in Your local jurisdiction; and, <br>b) be responsible for Your own virtual currency tokens; and, <br>c) backup/write down Your  \"backup phrase \" and keep it private; and, <br>d) carefully guard Your private keys; and, <br>f) ensure that Your device(s) are fully updated and do not contain viruses,' +
        ' malware or otherwise malicious software.You shall not: <br>a) deposit virtual currency tokens into addresses for tokens that are not supported by the Guarda Wallet; or, <br>b) use the Guarda Wallet in a manner likely to infer with other Guarda Wallet users or virtual currency nodes (e.g. excessive API calls or network spam); or, <br>c) use the Guarda Wallet in a manner contrary to Your local laws.\n' +
        '<h3>5. No Control Over Blockchains</h3> ' +
        'Software Developer is not the creator of, and does not have any control over, any of the virtual currencies that the Guarda Wallet allows You to use.\n' +
        '<h3>6. Third Party Integrations</h3> ' +
        'The Guarda Wallet integrates with third party services. Although the Guarda Wallet makes it easy to engage with the integrated third parties, Software Developer shall not be responsible for any consequences stemming from Your use of third party integrated services. If You require assistance with a third party integration then You should contact the third party.\n' +
        '<h3>7. Transactions</h3> ' +
        'The only authentic record of virtual currency transactions is the applicable virtual currency blockchain.The Guarda Wallet provides functionality that allows You to send virtual currency transfer instructions. Software Developer does not guarantee that transactions You perform using the Guarda Wallet shall be stored in any virtual currency blockchain. You must ensure that Your transactions conform to the applicable rules of the virtual currency software. There may be transaction fees (e.g. mining fees) associated with Your virtual currency transactions that are required by the virtual currency system You engage with. Software Developer shall not be responsible for any losses You incur due to transaction fees or losses that occur due to incorrectly set transaction fees (i.e. too low or high). Software Developer does not have access to Your transactions (or anyone else\'s).\n' +
        '<br>' +
        '<h3>8. Limited Intellectual Property License</h3> ' +
        'This agreement licenses the Guarda Wallet to You on a personal, non-exclusive, royalty-free, non-transferable, worldwide-basis, for the purpose of holding and transferring virtual currencies. You are not permitted to re-distribute the Guarda Wallet, modify any code or use any Guarda Wallet content, including images and text, as part of any other software or project of any kind. For partnership inquiries please contact Software Developer through www.Jaxx.io.\n' +
        '<br>' +
        '<h3>9. Third Party Libraries</h3> ' +
        'The Guarda Wallet contains libraries developed by third parties. Software Developer may provide third party libraries to You as part of the Guarda Wallet solution but shall not be considered to be the owner or licensor of the third party libraries. Please refer to and respect the relevant third party library licenses. \n' +
        '<h3>10. Specifically Disclaimed Risks</h3> ' +
        'Using virtual currency software necessarily entails many risks. Software Developer specifically disclaims and shall have no liability to You for the following risks: <br>a) operating system failures (mobile or desktop); and, <br>c) interactions between Your hardware, software and the Guarda Wallet; and, <br>c) cloud backup software (e.g. certain Android distributions) may upload your private information to third party services; and, <br>d) malware, viruses or other malicious software on Your device that is able to take control of or interfere with the Guarda Wallet; and, <br>e) communication delays between Your Guarda Wallet and a node or relay service for a virtual currency (and vice versa); and, <br>f) failure to achieve a certain market value/price for a virtual currency token, whether through a third-party service or any other kind of transaction; and, theft of virtual currency tokens.\n' +
        '<h3>11. No Warranty</h3> ' +
        'The Guarda Wallet is provided to You at no cost,  \"as-is \" and without any warranty whatsoever, to the maximum extent permissible by law. Without limiting the generality of the foregoing, Software Developer does not warrant that the Guarda Wallet is fit for Your purpose, even if You have previously provided notice of Your intended purpose, and does not warrant that the Guarda Wallet will operate in a bug-free manner.\n' +
        '<h3>12. Limitation of Liability</h3> ' +
        'Software Developer\'s liability to You shall not, under any circumstances, exceed the greater of:  <br>a) the US dollar value of 0.1 bitcoins; or,  <br>b) USD 50.\n' +
        '<h3>13. Indemnity</h3> ' +
        'You agree to indemnify Software Developer against any claims, damages, losses or legal fees incurred due to Your use (or misuse) of the Guarda Wallet.\n' +
        '<h3>14. Non-Waiver</h3> ' +
        'No action or inaction on the part of Software Developer shall be considered a waiver of any right or obligation by Software Developer.\n' +
        '<h3>15. Amendment</h3> ' +
        'This agreement may be amended by Software Developer by providing You with 30 days notice of any proposed change. If You do not agree to the amended terms then Your sole remedy shall be to cease using the Guarda Wallet.\n' +
        '<h3>16. Assignment</h3> ' +
        'You may not assign this agreement. Software Developer may assign this agreement upon 15 days notice.\n' +
        '<br>' +
        '<h3>17. Governing Law and Choice of Forum</h3> ' +
        'This agreement shall be governed by the laws of Estonia. Any disputes related to this agreement or the Guarda Wallet shall be heard in the Harju County Court (Harju Maakohus) in Tallinn, Estonia\n' +
        '<h3>18. Entire Agreement</h3> ' +
        'This is the entire agreement between the parties and supersedes any other agreement, representations (or misrepresentations), or understanding, however communicated.',
        callback: function (value) {
            clearHash();
        }
    });
    scrollToTop();
}

function clearHash() {
    window.location.hash = "";
}