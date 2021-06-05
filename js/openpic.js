

    embed=$('#open-pic').html();
$('#btn-open-pic').click(function(){
 status=$(this).text()
  if(status=='사진첩 닫기'){$('#open-pic').html(''); $(this).text('사진첩 열기');}
  else{$('#open-pic').html(embed); $(this).text('사진첩 닫기'); }
});