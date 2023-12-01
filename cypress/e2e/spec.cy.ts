describe('My First Test', () => {
  it('Validar componentes del login', () => {
    cy.visit('/');
    cy.get('#TituloRegistro').should('be.visible');
    cy.get('#SubtituloRegistro').should('be.visible');
    cy.get('#TituloInicioSesion').should('be.visible');
    cy.get('#loginFormSubmitButton').should('be.visible');
    cy.get('#txt-input').should('be.visible');
    cy.get('#pwd').should('be.visible');
  });

  it('Validar nombres de los componentes', () => {
    cy.visit('/');
    cy.get('#TituloRegistro').should('have.text', '¿Aún no estás registrado?');
    cy.get('#SubtituloRegistro').should('have.text', 'Registrarse');
    cy.get('#TituloInicioSesion').should('have.text', 'Iniciar Sesión');
    cy.get('#loginFormSubmitButton').should('have.text', 'Iniciar Sesión');
    cy.get('#txt-input').should(
      'have.attr',
      'placeholder',
      '@UsuarioDemo: admin@hotmail.com'
    );
    cy.get('#pwd').should('have.attr', 'placeholder', '@ContraseñaDemo: admin');
  });

  it('Ingresar datos en el Login', () => {
    cy.visit('/');
    cy.get('#txt-input').type('admin@hotmail.com');
    cy.get('#pwd').type('admin');
    cy.get('#loginFormSubmitButton').click();
  });
});

describe('Validar el inicio del sistema', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#txt-input').type('admin@hotmail.com');
    cy.get('#pwd').type('admin');
    cy.get('#loginFormSubmitButton').click();
  });

  it('Validar componentes del inicio', () => {
    cy.get('.Contenedor_Principal').should('be.visible');

    cy.get('h1.Titulo_Menu_Navegacion').should(
      'have.text',
      'Pruebas de Software'
    );
    cy.get('h2.Titulo_Menu_Navegacion').should('have.text', 'Menú Principal');

    cy.get('.Opciones').should('have.length', 1);
  });

  it('Validar opcion A1', () => {
    cy.get('#Opcion1 p').should(
      'have.text',
      'Front End para obtener Media y Desviación Estándar'
    );
    cy.get('#Opcion1 button').should('have.text', 'Mostrar A1');
  });

  it('Validar opcion A2', () => {
    cy.get('#Opcion2 p').should(
      'have.text',
      'Front End para obtener Regresión Lineal'
    );
    cy.get('#Opcion2 button').should('have.text', 'Mostrar A2');
  });

  it('Validar opcion A3', () => {
    cy.get('#Opcion3 p').should(
      'have.text',
      'Front End para obtener el método Simpson'
    );
    cy.get('#Opcion3 button').should('have.text', 'Mostrar A3');
  });
});

describe('Validar el inicio del sistema', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#txt-input').type('admin@hotmail.com');
    cy.get('#pwd').type('admin');
    cy.get('#loginFormSubmitButton').click();
  });

  it('Validar componentes de la pantalla A1', () => {
    cy.get('#Opcion1 button').click();
    cy.get('.conjunto_botones').should('have.length', 1);
    cy.get('.conjunto_botones button.Escoger1').should(
      'have.text',
      'Escoger Array 1'
    );
    cy.get('.conjunto_botones button.Escoger2').should(
      'have.text',
      'Escoger Array 2'
    );

    cy.get('.opciones_Botones').should('have.length', 1);
    cy.get('.opciones_Botones #boton1').should('have.text', 'Calcular Media');
    cy.get('.opciones_Botones #boton2').should(
      'have.text',
      'Calcular Desviación'
    );

    cy.get('.opcion_Resultado #Media').should('have.text', 'Media');
    cy.get('.opcion_Resultado #Desviacion').should(
      'have.text',
      'Desviación Estándar'
    );
    cy.get('.opcion_Resultado p').should('include.text', 'Resultado');
  });

  it('Probar botones del A1', () => {
    cy.get('#Opcion1 button').click();
    cy.get('.conjunto_botones button.Escoger1').click();

    cy.get('.Pie_Pagina h3').should('have.text', 'Array Elegido:');
    cy.get('.Pie_Pagina p').should(
      'have.text',
      ' 15,69.9,6.5,22.4,28.4,65.9,19.4,198.7,38.8,138.2 '
    );

    cy.get('.opciones_Botones #boton1').click();
    cy.get('.opciones_Botones #boton2').click();

    cy.get('.opcion_Resultado #Media_Resultado').should(
      'have.text',
      'Resultado 60.32 '
    );
    cy.get('.opcion_Resultado #Resultado_Desviacion').should(
      'have.text',
      'Resultado 62.26 '
    );
  });

  it('Validar componentes de la pantalla A3', () => {
    cy.get('#Opcion2 button').click();
    cy.get('.conjunto_botones').should('have.length', 1);
    cy.get('.conjunto_botones button.BotonObtenerArreglo11').should(
      'have.text',
      'Escoger Array 1'
    );
    cy.get('.conjunto_botones button.BotonObtenerArreglo22').should(
      'have.text',
      'Escoger Array 2'
    );
    cy.get('.conjunto_botones button.BotonObtenerArreglo33').should(
      'have.text',
      'Escoger Array 3'
    );
    cy.get('.conjunto_botones button.BotonObtenerArreglo44').should(
      'have.text',
      'Escoger Array 4'
    );

    cy.get('.opciones_Botones').should('have.length', 1);
    cy.get('.opciones_Botones button.ResultadoRegresion').should(
      'have.text',
      'Calcular Regresion'
    );

    cy.get('.opcion_Resultado h3').should('have.text', 'Resultados:');
  });

  it('Probar botones del A3', () => {
    cy.get('#Opcion2 button').click();
    cy.get('.conjunto_botones button.BotonObtenerArreglo11').click();

    cy.get('.Pie_Pagina h3').should('have.text', 'Array Elegido:');
    cy.get('.Pie_Pagina p').should(
      'have.text',
      'Arreglo 1: 130,650,99,150,128,302,95,945,368,961Arreglo 2: 186,699,132,272,291,331,199,1890,788,1601'
    );

    const valorDeX = '456';
    cy.get('.opciones_Botones input[name="Input-xk"]').type(valorDeX);

    cy.get('.opciones_Botones .ResultadoRegresion').click();

    cy.get('.opcion_Resultado #r1').should(
      'have.text',
      'r1: 0.9544965741046826'
    );
    cy.get('.opcion_Resultado #rr').should(
      'have.text',
      'rr: 0.9110637099775758 '
    );
    cy.get('.opcion_Resultado #B0').should(
      'have.text',
      'B0: -22.55253275203422 '
    );
    cy.get('.opcion_Resultado #B1').should(
      'have.text',
      'B1: 1.727932426206986 '
    );
    cy.get('.opcion_Resultado #Yk').should(
      'have.text',
      'Yk: 765.3846535983513 '
    );
  });

  it('Validar componentes de la pantalla A5', () => {
    cy.get('#Opcion3 button').click();
    cy.get('.conjunto_botones').should('have.length', 1);
    cy.get('#BotonesDisponibles').should(
      'have.text',
      'Array No disponibles'
    );

    cy.get('.opciones_Botones').should('have.length', 1);
    cy.get('.opciones_Botones button.ObtenerResultado').should(
      'have.text',
      'Calcular Resultado'
    );

  });

  it('Probar botones del A5', () => {
    cy.get('#Opcion3 button').click();

    cy.get('.opciones_Botones input[name="Input-x0"]').type('10');
    cy.get('.opciones_Botones input[name="Input-x1"]').type('20');
    cy.get('.opciones_Botones input[name="Input-num_seg"]').type('5');
    cy.get('.opciones_Botones input[name="Input-dof"]').type('8');
    cy.get('.opciones_Botones input[name="Input-error"]').type('0.00001');

    cy.get('.opciones_Botones select').select('x*x', { force: true });

    cy.get('.ObtenerResultado').click();

    cy.get('.opciones_Resultados .opcion_Resultado p').should('include.text', 'Resultado');
  });
});
