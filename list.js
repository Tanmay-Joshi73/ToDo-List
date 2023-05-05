let Top=1
const Click=new Audio
Click.src='./Click.wav'
const Hover_Btn=document.getElementById('Add_btn')
const input=document.getElementById('Input_Text')
const List1=document.getElementById('First_Task')
const List2=document.getElementById('Second_Task')
const List3=document.getElementById('Third_Task')
const List4=document.getElementById('Forth_Task')
const List5=document.getElementById('Fifth_Task')
const Main_Bar=document.getElementById('Sample')
const Completed= new Audio
 Completed.src='./Achievement.wav'
        Main_Bar.style.width='100px'
        
        Hover_Btn.addEventListener('mouseenter',()=>{
        //                 // console.log("Hello WOrld")
        // input.style.width='85%'
                Hover_Btn.style.backgroundColor='rgb(129, 123, 172)'
                Hover_Btn.style.transition='width 1s'
                InputPartEnter()
                Hover_Btn.style.width='70px'
        })
        Hover_Btn.addEventListener('mouseleave',()=>{
                Hover_Btn.style.backgroundColor=''
                input.style.width='90%'
                Hover_Btn.style.width='50px'        
        })

        function InputPartEnter(){
                input.style.width='85%'
                input.style.transition='width 1s'
        }


     


        // Random Images Generator
const Images=['https://wallpapercave.com/wp/wp2634897.jpg',
               'https://th.bing.com/th/id/R.3a9f0210ff7d1e83039ff237c81bacae?rik=asArcL6qvWfZfA&riu=http%3a%2f%2fs1.picswalls.com%2fwallpapers%2f2016%2f03%2f29%2fbeautiful-nature-high-definition_042323787_304.jpg&ehk=8tO7UxFL%2bC03x6vfc2O9EhdUCe4fl6tC7UGUdlnpdX4%3d&risl=&pid=ImgRaw&r=0', 
              'https://th.bing.com/th/id/OIP.VKCPRArIcinHh8Sn1NfC4QHaEK?pid=ImgDet&rs=1',
              'https://th.bing.com/th/id/OIP.5Cj_OBAmvIBZ_G0NYfdaygHaEK?pid=ImgDet&rs=1',
              'https://th.bing.com/th/id/R.b952d4e85e192d0baea144aa61f588a3?rik=A006j6sL742cww&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f07%2fnatural-landscape-purple-lake-wallpaper-.jpg&ehk=pAMyN7JHIDi73moP1dIjfu7zY10pXVNw92GFzZalDaE%3d&risl=&pid=ImgRaw&r=0',
              'https://th.bing.com/th/id/R.9be104f07fe00814e0db555cbf67e2fd?rik=%2bpaoOdfPBqY7vw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-YQsmWsmacHo%2fTWoCM_lnYjI%2fAAAAAAAAB7s%2fdYpl92qdQSc%2fs1600%2fnn100.jpg&ehk=7I0PsWczjAxDSe4eR7GGxwcSjLVla1AIIArnvlgymTM%3d&risl=&pid=ImgRaw&r=0',
              'https://4.bp.blogspot.com/-3qTJTlYy7FQ/XEZo2twAYFI/AAAAAAAAASc/PU3qQNuLafwfxq9oIoKpxn2s6iglc0u9wCLcBGAs/s1600/Natural%2B%252826%2529.jpg',
              'https://3.bp.blogspot.com/-MeC9Z8Bb14w/To6zC9AUdQI/AAAAAAAABjk/hqPaq46PubI/s1600/beautiful_landscapepictures.jpg',
              'https://wallpapercave.com/wp/7LHjcyg.jpg',
              'https://sitewallpaper.files.wordpress.com/2015/08/hd-nature-downxxx112.jpg',
              'https://th.bing.com/th/id/OIP.ienX7ym28gLVruGGiaIfBwHaEK?pid=ImgDet&rs=1',
              'https://th.bing.com/th/id/R.e528ca8a1dac419ff2b0071120ecc986?rik=JsDebwtwu6v8sA&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2016%2f01%2fCool-and-Beautiful-Nature-desktop-wallpaper-image-2560X1600.jpg&ehk=WWtNurVm9a0rWJrce%2fWxK5ehuPq%2bkDe%2fJtza2JHnrgQ%3d&risl=&pid=ImgRaw&r=0',
              'https://th.bing.com/th/id/R.f0cb453b9d005825e995ec77387ac4d9?rik=y3nIP%2f43A%2bFtHA&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2fnatural-background-hd-beautiful-nature-backgrounds-hd.jpg&ehk=kFuqjlKlOpp5Ymg4%2bMuuICB%2f5BYaYGT4UMsBmvME0GY%3d&risl=&pid=ImgRaw&r=0',
              'https://2.bp.blogspot.com/-MET3GX6Fi30/TbQImCvB4pI/AAAAAAAAA8s/9f1TfWkbmvE/s1600/IMG_8326.JPG',
              'https://pbs.twimg.com/media/Dk4W2-JXcAAg7vt.jpg',      
              'https://th.bing.com/th/id/R.e8b42fa88d077f7fbe371c273ab368c1?rik=n2cfe9ULo%2fk%2brA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Jz0cfuHLhAw%2fUjxdmPbTAdI%2fAAAAAAAAAHc%2fezoyX9cnnDE%2fs1600%2fATHIRAPPALLI.jpg&ehk=YA62wrDwgWKcdpQGvuWt2wFct2tmh2yNm99zmSjPK64%3d&risl=&pid=ImgRaw&r=0'  
        ]
    
// const Random_Image=Math.floor(Math.random()*16);
// const Duplicate=document.getElementsByClassName('container')
// console.log(Random_Image)
// document.body.style.background=`url(${Images[Random_Image] } )`
// document.body.style.background=`url(${Images[1]})`
// document.body.style.backgroundRepeat='no-repeat'
// document.body.style.backgroundSize='auto'

            function Add(){
          
                
                console.log(input.value);
                if(Top>5) {
                        
                        alert("Limit Has Been Reached")
                }

                else{

                if(!input.value )
                {alert("Nothing Has Been Choosed")
        }

                else{
                        Click.play()
                if(Top==1){Top++
                       
                        
                        First_Task.innerText=`${input.value}`
                }        
                else if(Top==2){Top++
                       
                        
                        Second_Task.innerText=`${input.value}`
                }
                else if(Top==3){Top++
                       
                        
                        Third_Task.innerText=`${input.value}`
                }
               else if(Top==4){Top++
                       
                
                        Forth_Task.innerText=`${input.value}`
                }
                else if(Top==5){Top++
                       
                        
                        Fifth_Task.innerText=`${input.value}`
                }
        }
}
        
                  
            }




        //     Function To Remove The List
        function Remove(){
                      
                if(!input.value&&Top==1){
                        
                        First_Check_Box.checked=false
                        Second_Check_Box.checked=false
                        Third_Check_Box.checked=false
                        Forth_Check_Box.checked=false
                        Fifth_Check_Box.checked=false
                        alert("Nothing Has Been Choosen")
                }


                        else{    
                                Completed.play()


                                if(First_Check_Box.checked==true ){
                                        // if(First_Task.innerText='')
                                        First_Task.innerText=Second_Task.innerText
                                        Second_Task.innerText=Third_Task.innerText
                                        Third_Task.innerText=Forth_Task.innerText
                                        Forth_Task.innerText=Fifth_Task.innerText
                                        Fifth_Task.innerText=''
                                        First_Check_Box.checked=false
                                        Top--;
                                        

                                        
                                }
                                else if(Second_Check_Box.checked==true ){
                                        Second_Task.innerText=Third_Task.innerText
                                        Third_Task.innerText=Forth_Task.innerText
                                        Forth_Task.innerText=Fifth_Task.innerText
                                        Fifth_Task.innerText=''
                                        Second_Check_Box.checked=false
                                        Top--
                                }
                                
                                else if(Third_Check_Box.checked==true ){
                                        Third_Task.innerText=Forth_Task.innerText
                                        Forth_Task.innerText=Fifth_Task.innerText
                                        Fifth_Task.innerText=''
                                        Third_Check_Box.checked=false
                                        Top--
                                }
                                else if(Forth_Check_Box.checked==true){

                                        Forth_Task.innerText=Fifth_Task.innerText
                                        Fifth_Task.innerText=''
                                        Forth_Check_Box.checked=false
                                        Top--
                                }
                                else if(Fifth_Check_Box.checked==true ){
                                        Fifth_Task.innerText=''
                                        Fifth_Check_Box.checked=false
                                        Top--
                                }

                                
                        }
                }

            
           
                
       
        

                
       
        