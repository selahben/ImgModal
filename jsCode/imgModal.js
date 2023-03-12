export function imgModal() {
    //inject CSS
    document.body.innerHTML += `<style> 
.imgModal {
      cursor: pointer;
    }
    #theModal {
      position: fixed;
      height: 100vh;
      width: 100vw;
      z-index: 9999;
      background-color: #000000a0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity:0;
      display:none;
    }
    #modalCloseBTN {
      display: block;
      position: absolute;
      right: 10px;
      top: 10px;
      background-color: #ffffff;
      border-radius: 50%;
      padding: 5px 8px;
      font-weight: 600;
      cursor: pointer;
    }
    #innerModal {
      width: 75%;
      height: 75%;
      display: flex;
      justify-content: center;
    }</style>`;
    //Calling the function which creates and inserts the Basic Modal
    buildModal();
    //DOM CONSTANTS
    const THE_MODAL = document.getElementById("theModal");
    const MODAL_IMAGE = document.getElementById("modalImg");
    const CLOSE_MODAL_BTN = document.getElementById("modalCloseBTN");
    //Sending Elements (button,modal) to function to Add close on click event
    closeModal(CLOSE_MODAL_BTN);
    closeModal(THE_MODAL);
    //Collecting all images with class "imgModal" into an Array
    let imgs = Array.from(document.getElementsByClassName("imgModal"));
    //Adding Event Listeners to all images in the array
    for (const img of imgs) {
        img.onclick = function (e) {
            //Getting the clicked image src
            let imgSrc = e.target.src;
            //Inserting the clicked image src to the image in the modal
            MODAL_IMAGE.src = imgSrc;
            //Changing the Modal's display (opacity is still 0);
            THE_MODAL.style.display = "flex";
            setTimeout(() => {
                THE_MODAL.style.opacity = "1";
            }, 100);
        };
    }
    //Close event function
    function closeModal(elem) {
        elem.onclick = function (e) {
            THE_MODAL.style.opacity = "0";
            setTimeout(() => {
                //Changing the Modal's display (opacity is already 0);
                THE_MODAL.style.display = "none";
            }, 1000);
        };
    }
    //Function to create and insert the Basic Modal
    function buildModal() {
        let theModalHtml = `<div id="theModal">
    <span id="modalCloseBTN">X</span>
    <div id="innerModal">
      <img id="modalImg" src="#" alt="" />
    </div>
  </div>`;
        document.body.innerHTML += theModalHtml;
    }
}
