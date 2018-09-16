'use strict';

$(document).ready(function() {
$(function(){
    var turn = 'X'
    $('[data-cell]').on('click', function(){
    if($(this).text() === ''||'X'){
      $(this).text(turn);
      if(turn === 'X')
      turn = 'O';
    }else{
      turn = 'X';
    }
   if($(this).text() === 'O'){
     $(this).text(turn);
     if(turn === 'O')
       turn = 'X';
   }else{
     turn = 'O';
   }
  })
  checkWin()
  })

$(function checkWin(){
  if($(''))
})

$('#clear').on('click', function(){
  $('[data-cell]').empty();
})
})
