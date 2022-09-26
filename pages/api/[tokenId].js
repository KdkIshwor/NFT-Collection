export default function handler(req, res) {
    // Get the token ID from the request
  const tokenId = req.query.tokenId
  // As all the images are uploaded on github, we can use the github api to get the image
  const image_url = "https://github.com/KdkIshwor/NFT-Collection/tree/main/public/cryptodevs/";
  // The api is sending  back metadata for a crypto dev
  // to make our collection compatible with opensea, we need to send back the metadata in the format they expect
    res.status(200).json({
        name: "Crypto Dev #" + tokenId,
        description: "A collection of crypto devs",
        image: image_url + tokenId + ".png",
    });

}