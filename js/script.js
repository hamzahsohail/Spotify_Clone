let i = -1;

let songs = ["HYPNOTIC", "jaaunKahan", "mannBhoolayNa", "Bahanay", "CRYLOOP2"];
let totalSongs = songs.length;

let progressBar = document.getElementById("progressBar");

function playThisSong(clickedID)
{
    if (i == -1)
    {
        let extractDigit = clickedID.match(/(\d+)/);
        songNumber = extractDigit[0];
        
        let index = songNumber - 1; 
    
        let songPath = "/songList/" + songs[index] + ".mp3";
        globalThis.audioElement = new Audio(songPath);
        audioElement.play();
    
        document.getElementById("player").style.gridTemplateAreas = '"songInfo musicControl" "songInfo progressBar"';
        document.getElementById("songInfo").style.display = "block";
    
        let cID = document.getElementById(clickedID);
        let closestClickedID = cID.closest(".song");
        let idName = closestClickedID.getAttribute("id");
        let text = document.getElementById(idName).firstElementChild;
        let playedSongCoverURL = text.getElementsByTagName("img")[0].src;
        
        document.getElementById("playedSongCover").src = playedSongCoverURL;
        
        let text2 = document.getElementById(idName).children[1].innerHTML;
        document.getElementById("playedSongTitle").innerHTML = text2;
    
        document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';
        
        i = 1;
    
        audioElement.addEventListener("timeupdate", ()=>
        {
            let progress = ((audioElement.currentTime/audioElement.duration) * 100);
    
            progressBar.value = progress;
    
            if (progress == 100)
            {
                playNextSong();
            }
        });
    }
    else
    {
        audioElement.pause();

        let extractDigit = clickedID.match(/(\d+)/);
        songNumber = extractDigit[0];
        
        let index = songNumber - 1; 
    
        let songPath = "/songList/" + songs[index] + ".mp3";
        globalThis.audioElement = new Audio(songPath);
        audioElement.play();
    
        document.getElementById("player").style.gridTemplateAreas = '"songInfo musicControl" "songInfo progressBar"';
        document.getElementById("songInfo").style.display = "block";
    
        let cID = document.getElementById(clickedID);
        let closestClickedID = cID.closest(".song");
        let idName = closestClickedID.getAttribute("id");
        let text = document.getElementById(idName).firstElementChild;
        let playedSongCoverURL = text.getElementsByTagName("img")[0].src;
        
        document.getElementById("playedSongCover").src = playedSongCoverURL;
        
        let text2 = document.getElementById(idName).children[1].innerHTML;
        document.getElementById("playedSongTitle").innerHTML = text2;
    
        document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';
        
        i = 1;
    
        audioElement.addEventListener("timeupdate", ()=>
        {
            let progress = ((audioElement.currentTime/audioElement.duration) * 100);
    
            progressBar.value = progress;
    
            if (progress == 100)
            {
                playNextSong();
            }
        });
    }
}

function resumeThisSong(clickedID)
{
    if (i == -1)
    {
        // play random song
        let randomNumber = Math.floor((Math.random() * totalSongs) + 1);
        globalThis.songNumber = randomNumber;

        let index = songNumber - 1;

        let songPath = "/songList/" + songs[index] + ".mp3";
        globalThis.audioElement = new Audio(songPath);
        audioElement.play();    

        let clickedIDStr = "btn" + randomNumber;

        document.getElementById("player").style.gridTemplateAreas = '"songInfo musicControl" "songInfo progressBar"';
        document.getElementById("songInfo").style.display = "block";

        let cID = document.getElementById(clickedIDStr);
        let closestClickedID = cID.closest(".song");
        let idName = closestClickedID.getAttribute("id");
        let text = document.getElementById(idName).firstElementChild;
        let playedSongCoverURL = text.getElementsByTagName("img")[0].src;
    
        document.getElementById("playedSongCover").src = playedSongCoverURL;
    
        let text2 = document.getElementById(idName).children[1].innerHTML;
        document.getElementById("playedSongTitle").innerHTML = text2;

        document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';

        i = 1;
    
        audioElement.addEventListener("timeupdate", ()=>
        {
            let progress = ((audioElement.currentTime/audioElement.duration) * 100);
        
            progressBar.value = progress;
        
            if (progress == 100)
            {
                playNextSong();
            }
        });
    }
    else if (i == 0)
    {
        audioElement.play();

        document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';

        audioElement.addEventListener("timeupdate", ()=>
        {
            let progress = ((audioElement.currentTime/audioElement.duration) * 100);
        
            progressBar.value = progress;
        });

        i = 1;
    }
}

function pauseThisSong(clickedID)
{
    audioElement.pause();
    
    document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="resumeThisSong(this.id)"><i id="fa-play" class="fa-solid fa-2x fa-play"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';

    i = 0;
}

function playPreviousSong(clickedID)
{
    if (i != -1)
    {
        audioElement.pause();
        if (songNumber == 1)
        {
            document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';

            songNumber = totalSongs;

            let index = songNumber - 1; 

            let songPath = "/songList/" + songs[index] + ".mp3";
            globalThis.audioElement = new Audio(songPath);
            audioElement.play();
            
            let clickedIDStr = "btn" + songNumber;

            let cID = document.getElementById(clickedIDStr);
            let closestClickedID = cID.closest(".song");
            let idName = closestClickedID.getAttribute("id");
            let text = document.getElementById(idName).firstElementChild;
            let playedSongCoverURL = text.getElementsByTagName("img")[0].src;
    
            document.getElementById("playedSongCover").src = playedSongCoverURL;
    
            let text2 = document.getElementById(idName).children[1].innerHTML;
            document.getElementById("playedSongTitle").innerHTML = text2;

            audioElement.addEventListener("timeupdate", ()=>
            {
                let progress = ((audioElement.currentTime/audioElement.duration) * 100);
            
                progressBar.value = progress;
            });

            i = 1;
        }
        else
        {
            document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';
            
            --songNumber;

            let index = songNumber - 1; 

            let songPath = "/songList/" + songs[index] + ".mp3";
            globalThis.audioElement = new Audio(songPath);
            audioElement.play();        

            let clickedIDStr = "btn" + songNumber;

            let cID = document.getElementById(clickedIDStr);
            let closestClickedID = cID.closest(".song");
            let idName = closestClickedID.getAttribute("id");
            let text = document.getElementById(idName).firstElementChild;
            let playedSongCoverURL = text.getElementsByTagName("img")[0].src;
    
            document.getElementById("playedSongCover").src = playedSongCoverURL;
    
            let text2 = document.getElementById(idName).children[1].innerHTML;
            document.getElementById("playedSongTitle").innerHTML = text2;

            audioElement.addEventListener("timeupdate", ()=>
            {
                let progress = ((audioElement.currentTime/audioElement.duration) * 100);
            
                progressBar.value = progress;
            });

            i = 1;
        }
    }
}

function playNextSong()
{
    if (i != -1)
    {
        audioElement.pause();
        if (songNumber == totalSongs)
        {
            document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';

            songNumber = 1;

            let index = songNumber - 1; 

            let songPath = "/songList/" + songs[index] + ".mp3";
            globalThis.audioElement = new Audio(songPath);
            audioElement.play();        
            
            let clickedIDStr = "btn" + songNumber;

            let cID = document.getElementById(clickedIDStr);
            let closestClickedID = cID.closest(".song");
            let idName = closestClickedID.getAttribute("id");
            let text = document.getElementById(idName).firstElementChild;
            let playedSongCoverURL = text.getElementsByTagName("img")[0].src;
    
            document.getElementById("playedSongCover").src = playedSongCoverURL;
    
            let text2 = document.getElementById(idName).children[1].innerHTML;
            document.getElementById("playedSongTitle").innerHTML = text2;

            i = 1;
    
            audioElement.addEventListener("timeupdate", ()=>
            {
                let progress = ((audioElement.currentTime/audioElement.duration) * 100);
                progressBar.value = progress;
        
                if (progress == 100)
                {
                    playNextSong();
                }
            });
        }
        else
        {
            document.getElementById("musicControl").innerHTML = '<button id="btn6" onclick="playPreviousSong(this.id)"><i id="fa-backward-step" class="fa-solid fa-2x fa-backward-step"></i></button><button id="btn7" onclick="pauseThisSong(this.id)"><i id="fa-pause" class="fa-solid fa-2x fa-pause"></i></button><button id="btn8" onclick="playNextSong()"><i id="fa-forward-step" class="fa-solid fa-2x fa-forward-step"></i></button>';

            songNumber++;

            let index = songNumber - 1; 

            let songPath = "/songList/" + songs[index] + ".mp3";
            globalThis.audioElement = new Audio(songPath);
            audioElement.play();

            let clickedIDStr = "btn" + songNumber;

            let cID = document.getElementById(clickedIDStr);
            let closestClickedID = cID.closest(".song");
            let idName = closestClickedID.getAttribute("id");
            let text = document.getElementById(idName).firstElementChild;
            let playedSongCoverURL = text.getElementsByTagName("img")[0].src;
    
            document.getElementById("playedSongCover").src = playedSongCoverURL;
    
            let text2 = document.getElementById(idName).children[1].innerHTML;
            document.getElementById("playedSongTitle").innerHTML = text2;

            i = 1;
        
            audioElement.addEventListener("timeupdate", ()=>
            {
                let progress = ((audioElement.currentTime/audioElement.duration) * 100);
            
                progressBar.value = progress;
            
                if (progress == 100)
                {
                    playNextSong();
                }
            });
        }
    }
}

progressBar.addEventListener("change", () => 
{
    if (i != -1)
    {
        let moveTime = (progressBar.value * audioElement.duration)/100;
        audioElement.currentTime = moveTime;
    }
    else
    {
        progressBar.value = 0;
    }
})