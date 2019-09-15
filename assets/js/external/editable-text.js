$('.edit').click(function(){
  $(this).hide();
  $('.box-editable').addClass('editable');
  $('.text-editable').attr('contenteditable', 'true');  
  $('.save').show();
  $('.text-editable').attr('contenteditable', 'true');  
});

$('.save').click(function(){
  $(this).hide();
  $('.box-editable').removeClass('editable');
  $('.text-editable').removeAttr('contenteditable');
  $('.edit').show();
});

// $('.input').click(function(){
//   $(this).hide();
//  $('.box-editable').addClass('editable');
//   $('.text-editable').attr('contenteditable', 'true');  
//   $('.save').show();
//   $('.text-editable').attr('contenteditable', 'true'); 
// });

$('.edit-b').click(function(){
  $(this).hide();
  $('.box-editable-b').addClass('editable');
  $('.text-editable-b').attr('contenteditable', 'true');  
  $('.save-b').show();
});

$('.save-b').click(function(){
  $(this).hide();
  $('.box-editable-b').removeClass('editable');
  $('.text-editable-b').removeAttr('contenteditable');
  $('.edit-b').show();
});