document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('convert-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const videoUrl = document.getElementById('video-url').value;

        try {
            // Make a POST request to the server to convert the video
            const response = await axios.get('https://youtube-mp3-download-highest-quality1.p.rapidapi.com/ytmp3/ytmp3/custom/', {
                params: {
                    url: videoUrl,
                    quality: '<REQUIRED>'
                },
                headers: {
                    'X-RapidAPI-Key': '5c6eecb389mshcd5be48286c497ep16ae5ejsn2a58edaa6333',
                    'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
                }
            });

            if (response.status === 200 && response.data) {
                // If the conversion was successful, display the download link
                resultDiv.innerHTML = `<p>MP3 Download Link: <a href="${response.data}" target="_blank">${response.data}</a></p>`;
            } else {
                // If there was an error during conversion, display the error message
                resultDiv.innerHTML = `<p>Error: Conversion failed. Please check the video URL.</p>`;
            }
        } catch (error) {
            resultDiv.innerHTML = `<p>Error: An error occurred during conversion.</p>`;
        }
    });
});
