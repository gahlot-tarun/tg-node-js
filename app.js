let data= {
    x:10,
    y:22,
    a:function(){
        return `<html><head>
        <tilte>Tarun Gahlot</title>
        <link href="copilot_style.css" rel="stylesheet">
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                        <style>
                            .chat-user-card {
                                background:red;
                            }
                        </style>
                        </head>
                        <body>
                        <section class="chat-user-card ">                            
                            <div class="card-inner d-flex flex-column gap-3 align-items-center justify-content-center">
                                <div class="media">
                                    <img src="" width='50' class='d-block img-fluid' style='border-radius:50%;' alt="">
                                </div>
                                <div class="content" style='margion-top:-25px !important;'>
                                    <h3 class="title"></h3>
                                    <p></p>
                                </div>
                            </div>                           
                            
                            
                            <div class="row ques-boxes" id="chatbot_ques">
                                <button class="ques-box p-3 border" data-toggle="modal" data-target="#formLead">
                                    <div class="" id="ques">Hello, How can i help you ?</div>
                                </button>
                            </div> 
                            <div class="chat-area w-100" id='messages'>
                                <!--<div class="chatbox-chat reciver">
                                    <span class="text" style="display:none" id="welcome_message"></span> 
                                </div> -->     
                            </div>
                            <div id="loader" style="display:none">
                                <!-- <div>
                                <img src="" width='50'/>
                                </div> -->
                                <div class="msg-wrapper"   style="background-color:;">

                                    <div class = "loader_msg1" id="loader_msg1" >Analyzing data</div>
                                    <div class = "loader_msg2" id="loader_msg2" style="display:none" >Optimizing response</div>
                                    <div class = "loader_msg3" id="loader_msg3" style="display:none" >Preparing insights</div>
                                    <div class="blue ball"   style="width: 2px; height: 2px; background-color:"></div>
                                    <div class="red ball"    style="width: 2px; height: 2px; background-color:"></div>  
                                    <div class="yellow ball" style="width: 2px; height: 2px; background-color:"></div>  
                                </div>
                            </div>
                            <div class="chat-type-box" id="chat-type-box">
                                <div class="text-center mb20">
                                    <button class="btn reset" id="start-over" style="display :none !important;">
                                        <i class="fa-solid fa-rotate-right"></i>
                                        Start Over
                                    </button>
                                    <!-- <button class="btn openFeedBack reset" id="openFeedBack" data-toggle="modal" data-target="#feedbackmodal" id="abc123">
                                        Feedback
                                    </button> -->
                                </div>
                                <div class="typing-box" id='chat-input'>
                                    <!-- <form class='chat-input' onsubmit='return false;'> -->
                                        <input type='text' autocomplete='on' placeholder='' id='input' />
                                        <button id='send'>
                                            <i class="fa-solid text-dark fa-paper-plane"></i>
                                        </button>
                                    <!-- </form> -->
                                </div>
                                    <p class=""></p>
                                    <img class="chatbot_footer" src="" style="display:none"/>                                    
                                <div id="footer" class="footer">
                                </div>
                            </div>                            
                        </section>

                        <div id="copyPopup">
                            <i class="fa-solid fa-check"></i> Response Copied To Clipboard!
                        </div>
                        </body>
                        </html>`;
    }
}

module.exports= data;