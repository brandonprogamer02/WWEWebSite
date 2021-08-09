

$('.container-votacion').submit(function (e) {
   e.preventDefault()
   // console.log($('.container-votacion #nombre')[0])
   if ($('.container-votacion #nombre')[0].value == '') {
      alert('completa el campo nombre')
   }
   else if ($('.container-votacion #apellido')[0].value == '') {
      alert('completa el campo apellido')
   }
   else if ($('.container-votacion #edad')[0].value == '') {
      alert('completa el campo edad')
   }
   else if ($('.container-votacion #luchador')[0].value == '') {
      alert('completa el campo luchador')
   }
   else if ($('.container-votacion #pais')[0].value == '') {
      alert('completa el campo pais')
   } else {
      $('.container-votacion #apellido')[0].value = ''
      $('.container-votacion #edad')[0].value = ''
      $('.container-votacion #luchador')[0].value = ''
      $('.container-votacion #nombre')[0].value = ''
      $('.container-votacion #pais')[0].value = ''
      alert('Todo ha salido bien!')
   }

})

$('.container-problemas').submit(function (e) {
   e.preventDefault()
   let val = false

   if ($('.container-problemas #radio-muy_gravedad')[0].checked ||
      $('.container-problemas #radio-grave')[0].checked ||
      $('.container-problemas #radio-leve')[0].checked
   ) {
      val = true
   }
   if ($('.container-problemas #nombre')[0].value == '') {
      alert('completa el campo nombre')
   }
   else if ($('.container-problemas #descripcion')[0].value == '') {
      alert('completa el campo descripcion')
   }
   else if ($('.container-problemas #correo')[0].value == '') {
      alert('completa el campo correo')
   }
   else if ($('.container-problemas #sitio')[0].value == '') {
      alert('completa el campo del sitio del problema')
   }else {
      if (!val) {
         alert('No marcaste la gravedad del problema!')
      } else {
         $('.container-problemas #nombre')[0].value = ''
         $('.container-problemas #descripcion')[0].value = ''
         $('.container-problemas #correo')[0].value = ''
         $('.container-problemas #sitio')[0].value = ''
         alert('Todo ha salido bien!')
      }
   }

})