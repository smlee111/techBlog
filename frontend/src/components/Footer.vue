<template>
    <div id="footer">
        <ul class="contact">
            <li>
                <p class="tit">Contact with LeeSeungMin</p>
            </li>
            <li>
                <p class="tit">About Project</p>
                <ul class="depth">
                    <li><a href="">Filo</a></li>
                    <li><a href="">Filo Game</a></li>
                    <li><a href="">TravelMaker</a></li>
                </ul>
            </li>
            <li>
                <p class="tit">About Channel</p>
                <ul class="depth">
                    <li><a href="">Blog GitHub</a></li>
                    <li><a href="">Filo GitHub</a></li>
                </ul>
            </li>
        </ul>
        <p class="copy">Copyright © LSM. All rights reserved.</p>
    </div>
</template>

<style scoped>
    #footer .contact {overflow: hidden;}
    #footer .contact > li {float: left; width: 400px; height: 260px; padding: 28px 40px;}
    #footer .contact > li:nth-child(1) {width: calc(100% - 800px); background: #031461; padding: 28px 32px;}
    #footer .contact > li:nth-child(2) {background: #020D41;}
    #footer .contact > li:nth-child(3) {background: #01092B;}
    #footer .contact > li .tit {color:#fff; font-size:26px; font-weight: 500;}
    #footer .contact > li .depth {margin: 30px 0 0;}
    #footer .contact > li .depth > li > a {line-height: 35px; color:rgba(255,255,255,.5); font-size: 16px; font-weight: 600;}
    #footer .contact > li .depth > li > a:hover {color:#fff;}
    #footer .copy {height: 70px; background: #000; line-height: 70px; color:rgba(255,255,255,.5); font-size:13px; font-weight: 600; padding: 0 32px;}
</style>