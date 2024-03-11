function probarValidarNombre () {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

function probarValidarCiudad () {
    console.assert(
        validarCiudad('') === 'No se ha ingresado ninguna ciudad.',
        'Validar ciudad no validó que se haya ingresado una ciudad.',
    );
}

function probarValidarComportamiento () {
    console.assert(
        validarComportamiento('') === 'No se seleccionó ningún comportamiento',
        'Validar comportamiento no validó que se haya ingresado un comportamiento.',
    );
}

function probarValidarRegalos () {
    console.assert(
        validarRegalos('') === 'La lista de regalos no puede estar vacía.',
        'Validar regalos no validó que la lista no sea vacía.',
    );

    console.assert(
        validarRegalos('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'La lista de regalos debe tener menos de 100 caracteres.',
        'Validar regalos no validó que la lista sea menor a 100 caracteres.',
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarRegalos();
