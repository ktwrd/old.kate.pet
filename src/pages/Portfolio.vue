<template>
    <div role="portfolio">
        <div class="container">
            <b-row class="d-flex flex-row">
                <b-col cols="auto" class="m-1">
                    <div class="card card-classic">
                        <div class="card-header">
                            Personal Website (<a href="https://github.com/ktwrd/kate.pet">git repo</a>)
                            <div class="card-header-sm">
                                Jan 2022 - Current
                            </div>
                        </div>
                        <div class="card-body">
                            You're looking at it right now!<br/>
                            Built with Vue.js v2, hosted with Github Pages.<br/>
                            <br/>
                            Was considering putting it up with GCS as a static<br/>
                            website but I couldn't be bothered and Github Pages<br/>
                            does a fine job with automatically deploying it.
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card card-classic">
                        <div class="card-header">
                            Xenia Bot (<a href="https://xenia.kate.pet">website</a>, <a href="https://github.com/ktwrd/xeniabot">github</a>)
                            <div class="card-header-sm">
                                Jan 2023 - Current
                            </div>
                        </div>
                        <div class="card-body">
                            Another General-purpose FOSS Discord bot written<br/>
                            in C# with Discord.NET and MongoDB.<br/>
                            <br/>
                            There is also a dashboard available for the bot,<br/>
                            written in C# using ASP.NET MVC, MongoDB, OAuth, and
                            Discord.NET.<br/>
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card card-classic">
                        <div class="card-header">
                            SixGrid (<a href="https://sixgrid.kate.pet">website</a>, <a href="https://github.com/sixgrid">github</a>)
                            <div class="card-header-sm">
                                Dec 2020 - Current
                            </div>
                        </div>
                        <div class="card-body">
                            A Free and Open-Source Desktop Client for<br/>
                            e926 and websites using the same api (like e621)<br/>
                            that is built with; Electron with Vue.js for the<br/>
                            desktop client which implements Google's Material<br/>
                            Design, C# (ASP.NET MVC API) for the Analytic Server.<br/>
                            <br/>
                            It also implements Steam integration with<br/>
                            <a href="https://github.com/greenheartgames/greenworks">Greenworks</a> via a closed-beta.
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card card-classic">
                        <div class="card-header">
                            88x31 (<a href="https://88x31.kate.pet">website</a>)
                            <div class="card-header-sm">
                                Aug 2022 - Current
                            </div>
                        </div>
                        <div class="card-body">
                            A collection of the 88x31 buttons of the past.<br/>
                            Similar to what is at the bottom of my homepage.
                        </div>
                    </div>
                </b-col>
                <b-col cols="auto" class="m-1">
                    <div class="card card-classic">
                        <div class="card-header">
                            OSL (<a href="https://github.com/ktwrd/opensoftwarelauncher">github</a>)
                            <div class="card-header-sm">
                                Sep 2022 - Jan 2023
                            </div>
                        </div>
                        <div class="card-body">
                            Open Software Launcher, an Open-Source framework for<br/>
                            developing your own launcher for internal applications.<br/>
                            <br/>
                            Created while I was working at Minalyze, in order to find<br/>
                            a solution to manage automatic updates, distrubiting betas,<br/>
                            quickly deploying and publishing new versions, and managing<br/>
                            licenses for their staff and external companies.<br/>
                            <br/>
                            <strong>Note:</strong> Doesn't include launcher since that was made<br/>
                            internally at Minalyze.<br/>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>
<style>
.card-classic {
    background: black;
    border: 1px solid white;
    border-radius: 0;
    color: white;
}
.card-classic .card-header {
    font-weight: bold;
}
.card-classic .card-header,
.card-classic .card-body {
    text-align: left;
    padding: 2px 4px;
    border-bottom: 1px solid #aaa;
    background: black;
}
.card-classic .card-header-sm {
    font-size: 16px;
    float: right;
    font-weight: normal;
}
</style>
<script>
export default {
    name: 'Portfolio'
}
</script>
