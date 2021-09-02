let data = fetch("veri.json")
.then(response=>response.json())
.then(data=>
    {
        $('.container #search').on('keyup',function(){
            let inputVal = $(this).val();
            let regExpEquals = new RegExp(inputVal, "i");
            if($(this).val() >= 0 ){
                $('.search-box ul').removeClass('active');
                $('.search-box ul li').html('');
            }else{
                $.each(data,function(key,value){
                    for(var i = 0 ; i <= data.users.length; i++){
                        if(value[i].name.search(regExpEquals) != -1 ){
                            $('.search-box ul').addClass('active');
                        $('.search-box ul li').html(' <a href="#">'+value[i].name+'</a>');
                        }
                    }
                })
            }
                   
        });
    }
)
