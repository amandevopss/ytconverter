<?php
// Get the YouTube video ID from the POST request
$videoId = $_POST['id'];

// Replace 'YOUR_RAPID_API_KEY' with your ytjar API key
$apiKey = '5c6eecb389mshcd5be48286c497ep16ae5ejsn2a58edaa6333',

// Make the API request to ytjar
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://youtube-mp36.p.rapidapi.com/dl?id=$videoId",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 20,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => [
    "x-rapidapi-host: youtube-mp36.p.rapidapi.com",
    "x-rapidapi-key:  $apiKey"
  ],
]);

$response = curl_exec($curl);

curl_close($curl);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json');

echo $response;
?>
