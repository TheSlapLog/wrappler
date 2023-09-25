<script>
// note
    import axios from 'axios'
    import Sdd from 'svelte-device-detector'

    function makeid(length) {
        let result = ''
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const charactersLength = characters.length
        let counter = 0
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
            counter += 1
        }
        return result
    }

    let url = 'https://wrappler-338e1-default-rtdb.europe-west1.firebasedatabase.app/saves'

    let saveID = makeid(6)

    let screenshotText = `SCREENSHOT NOW`

    let qrspace

    let screenshot
    let yourCode

    let ihnu
    let ihem
    let ihno

    function handleNumber(e) {
        ihnu = e.target.value
    }

    function handleEmail(e) {
        ihem = e.target.value
    }

    function handleNote(e) {
        ihno = e.target.value
    }

    function handleClick() {
        axios({
            method: 'put',
            url: `${url}/${saveID}/.json`,
            data: {
                id: saveID,
                number: ihnu,
                email: ihem,
                note: ihno
            }
        }).then(() => {
            let qrcode = new QRCode(qrspace, {
                text: `https://saves.wrappler.net/saves/${saveID}`,
	            width: 256,
	            height: 256,
	            colorDark : "#78350f",
	            colorLight : "#ffffff",
	            correctLevel : QRCode.CorrectLevel.H
            })

            screenshot.innerText = screenshotText
            yourCode.innerText = 'Your code is: ' + saveID
        })

    }
</script>


<!-- 
 -->
<Sdd showInDevice="mobile">
    <h1 class="font-extrabold text-4xl">wrappler <p class="ml-5 text-5xl underline mb-2">saves</p></h1>
    <div class="w-11/12 outline-none m-auto" id="form">
        <input 
        class="border-2 border-gray-800 mt-1 h-12 w-full p-2 outline-none"
        placeholder="phone number"
        type="tel"
        spellcheck="false"
        on:input={handleNumber}
        >
        
        <input
        class="border-2 border-gray-800 mt-1 h-12 w-full p-2 outline-none"
        placeholder="e-mail"
        type="email"
        spellcheck="false"
        on:input={handleEmail}
        >

        <textarea
        class="border-2 border-gray-800 mt-1 resize-none w-full h-28 p-2 outline-none"
        placeholder="note"
        spellcheck="false"
        on:input={handleNote}
        ></textarea>    

        <div class="w-fit m-auto w/12" id="button">
            <button 
        on:click={handleClick}
        class="bg-red-500 text-white p-4 font-bold rounded-md border-2 border-gray-800 w-full text-center m-auto">SUBMIT</button>
        </div>
    </div>
    <div bind:this={qrspace} class="w-40 h-40 m-auto mt-4" id="qr-space"></div>
    <p class="text-amber-900 font-extrabold text-4xl text-center select-none p-4 w-fit m-auto" bind:this={screenshot}></p>
</Sdd>

<Sdd showInDevice="desktop">
    <main class="outline-none">
    <h1 class="font-extrabold text-4xl mt-2 ml-2">wrappler <p class="ml-5 text-5xl underline mb-2">saves</p></h1>
        <div class=" w-96 outline-none ml-6 mt-5" id="form">
            <input 
            class="border-2 border-gray-800 mt-1 h-12 w-full p-2 outline-none"
            placeholder="phone number"
            type="tel"
            spellcheck="false"
            on:input={handleNumber}
            >
            
            <input
            class="border-2 border-gray-800 mt-1 h-12 w-full p-2 outline-none"
            placeholder="e-mail"
            type="email"
            spellcheck="false"
            on:input={handleEmail}
            >
    
            <textarea
            class="border-2 border-gray-800 mt-1 resize-none w-full h-28 p-2 outline-none"
            placeholder="note"
            spellcheck="false"
            on:input={handleNote}
            ></textarea>    
    
            <button 
            on:click={handleClick}
            class="bg-red-500 text-white p-4 font-bold rounded-md border-2 border-gray-800 hover:bg-red-600">SUBMIT</button>
        </div>
        <div bind:this={qrspace} class="w-40 h-40 m-auto" id="qr-space"></div>
        <p class="text-amber-900 font-extrabold text-4xl text-center select-none p-4 w-fit m-auto" bind:this={screenshot}></p>
        <p class="text-amber-900 font-extrabold text-4xl text-center p-4 w-fit m-auto" bind:this={yourCode}></p>
</main>
</Sdd>
