let printlist = document.getElementById('printlist');
let dogimage = document.getElementById('images');
const getlist = () => {
      fetch('https://dog.ceo/api/breeds/list/all').then((res) => {
            return res.json();
      }).then((data) => {
           const breedlist = data.message;
            console.log(breedlist);
            
            for (const breed in breedlist) {
                  
                  if(breedlist[breed].length == 0){
                        
                        console.log('breed[key]',breedlist[breed]);

                        printlist.innerHTML += `<li onclick="return listImage('${breed}')">${breed}</li>`;

                  }else{

                        console.log(breedlist[breed]);

                        orderlist = '<ol>';

                        for (const subbreed in breedlist[breed]) {
                              orderlist += `<li onclick="return listImage('${breed}')">${breedlist[breed][subbreed]}</li>`
                        }
                        orderlist += '</ol>';

                        printlist.innerHTML += `<li>${breed} ${orderlist}</li>`


                  }
            }

      }).catch((err) => {
            console.log(err);
      })
}
getlist();

const listImage = (breed) => {
      console.log("click");
        fetch(`https://dog.ceo/api/breed/${breed}/images`).then((res) => {
        return res.json();
      }).then((data) => {
            const breedimage = data.message;
            console.log('breed' ,breedimage);

            dogimage.innerHTML = " ";

            breedimage.forEach((img) => {
                dogimage.innerHTML += `<div class="col-3 ">         
                  <img src="${img}" alt="img"/></div>`
            })
      }).catch((err) => {
            console.log('err',err);
      })
}