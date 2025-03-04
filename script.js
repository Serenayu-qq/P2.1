const images = [
    "main-image-1.jpg", //A
    "main-image-2.jpg", //B
    "main-image-3.jpg", //C
    "main-image-4.jpg", //D
    "main-image-5.jpg", //E
    "main-image-6.jpg", //F
    "main-image-7.jpg", //G
    "main-image-8.jpg", //H
    "main-image-9.jpg", //I
    "main-image-10.jpg", //J
    "main-image-11.jpg", //K
    "main-image-12.jpg", //L
    "main-image-13.jpg", //M
    "main-image-14.jpg", //N
    "main-image-15.jpg", //O
    "main-image-16.jpg", //P
    "main-image-17.jpg", //Q
    "main-image-18.jpg", //R
    "main-image-19.jpg", //S
    "main-image-20.jpg", //T
    "main-image-21.jpg", //U
    "main-image-22.jpg", //V
    "main-image-23.jpg", //W
    "main-image-24.jpg", //X
    "main-image-25.jpg", //Y
    "main-image-26.jpg", //Z
  ];
  
  function displayImage() {
    const input = document.getElementById("charInput").value.toUpperCase();
    const imgElement = document.getElementById("displayedImage");
  
    // Assign an image based on character (A-Z)
    const index = input.charCodeAt(0) - 65; // 'A' is 65 in ASCII
    if (index >= 0 && index < images.length) {
      imgElement.src = images[index];
      imgElement.style.display = "block";
    } else {
      alert("Please enter a letter between A and Z.");
      imgElement.style.display = "none";
  
      // IF INVALID INPUT IS ENTERED, DISPLAY ALTERNATE IMAGE
      imgElement.src =
        "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmtkdnJhMXY4Njd1cXR3MTM3MW1nMzZ1NXNhNHlhOHA0MWF2dDUzdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13dRJkj5wgKq9q/giphy.gif";
      imgElement.style.display = "block";
    }
  }
  