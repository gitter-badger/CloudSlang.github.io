'use strict';

angular.module('scoreWebsiteApp')
    .controller('MainCtrl', function ($rootScope) {

        // App labels
        $rootScope.messages = {
            // nav bar
            navGettingStartedTitle: 'Getting Started',
            navUseCasesTitle: 'Use cases',
            navAboutTitle: 'About Us',
            navContactUsTitle: 'Contact Us',

            // header
            headerMainTitle1: 'Process-based, lightweight, scalable',
            headerMainTitle2: 'open-source orchestration engine',
            headerDescription: 'score is a java-based open-source generic orchestration engine which is process-based, ' +
                'embeddable, lightweight, scalable and multi-lingual',
            headerStartNow: 'Start Now',

            // footer
            footerPrivacy: 'Privacy',
            footerDocumentation: 'Documentation',
            footerTerms: 'Terms',
            footerContribute: 'Contribute',
            footerScoreTeam: 'score team',

            // bullets
            mainBulletsContentTitle: 'Content',
            mainBulletsMultiLingualTitle: 'Multi-lingual',
            mainBulletsLightweightTitle: 'Lightweight',
            mainBulletsContentDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            mainBulletsMultiLingualDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            mainBulletsLightweightDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',

            // contact us
            contactUsHeader: 'You\'d like to reach out to us? Drop us a message!',
            contactSuccess: 'Your message was sent successfully. Thanks!',
            contactFailure: 'Please fill out all the fields in the form.',
            contactSendButton: 'Send Message',

            // about us
            aboutUsWhoWeAreText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dui tellus. Ut tristique hendrerit dui ullamcorper finibus. Donec sagittis mattis efficitur. Vivamus et consectetur tellus. Proin placerat accumsan purus, nec imperdiet erat tristique vel. Ut ligula justo, dignissim vel.',

            // use cases
            useCasesTitle: 'Powered with score',
            useCasesCsa: 'Cloud Service Automation',
            useCasesCodar: 'Project CODAR',
            useCasesOO: 'Operations Orchestration',
            useCasesCsaDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            useCasesCodarDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            useCasesOODesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',

            // getting started
            downloadCliHeader: 'Download and use score command-line',
            downloadCliDownloadLink: 'Download and see how',
            embedScoreHeader: 'Embed score in your application',
            embedScoreLink: 'Press here to see how',
            orText: 'or',
            // -- download and install sli
            detailedDownloadCliHeader: 'Download score command-line',
            detailedDownloadCliText: 'Download and Unzip score command-line',
            detailedSlangCliHeader: 'Use slang',
            detailedSlangCliText: 'Write flow with slang',
            detailedUseCliHeader: 'Start score command-line',
            detailedUseCliText: 'Open your console and execute score cli',
            detailedTriggerFlowHeader: 'Trigger flow',
            detailedTriggerFlowText: 'Trigger your slang written flow from score command-line',
            detailedCliHeader: 'console',
            detailedCliPrefix: '>',
            detailedCliClear: 'Clear',
            detailedCliOpenScore: 'java -jar score-cli.jar^1000\nHi I\'m score!!\n>',
            detailedCliTriggerFlow: 'score trigger-flow\n^1000Flow triggered successfully^1200\nthe weather in Tel Aviv is: Hot\n>',
            // -- embed score
            detailedEmbedPomHeader: 'Score dependencies',
            detailedEmbedPomText: 'Add score dependencies to your pom.xml',
            detailedEmbedSpringHeader: 'Spring configuration',
            detailedEmbedSpringText: 'Add some score configuration to your application context xml',
            detailedEmbedScoreApiHeader: 'Use score API',
            detailedEmbedScoreApiText: 'Call score APIs from your java application',
            detailedEmbedScoreApiMore: 'Press here for more score APIs'
        };

        function isApple() {
            return !!(navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/iPod/i));
        }

        if (isApple()) {
            $('body').css('font-family', 'Helvetica');
        }

        $rootScope.sections = [
            { id: 'gettingStarted', title: $rootScope.messages.navGettingStartedTitle  },
            { id: 'useCases', title: $rootScope.messages.navUseCasesTitle },
            { id: 'about', title: $rootScope.messages.navAboutTitle },
            { id: 'contactUs', title: $rootScope.messages.navContactUsTitle  }
        ];

        $rootScope.year = new Date().getFullYear();
    });