        // ------------ REQUISITO JQUERY :  Função voltar ao topo -------------

        $(function () {
            $(window).scroll(() => pegarAltura());
            $("#botao-topo").toggle();
            pegarAltura();
        });
        // UTILIZAÇÃO SCROLL() - Voltar ao topo e Esconder Menu

        function pegarAltura() {
            if ($(window).scrollTop() > 400) {
                $("#botao-topo").fadeIn(500);
                $("header").fadeOut(500);
            } else {
                $("#botao-topo").fadeOut(500);
                $("header").fadeIn(500);
            }
        }
        $(document).ready(function () {

            // - Voltar ao topo devagar
            $(function () {
                $('#botao-topo').click(function () {
                    var target = $(this.hash);
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                });
            });
        });


             //-------------------- Funções AutoComplete Busca-----------------
        var trabalhos = [
            "Subestações Elétricas Aéreas e Abrigadas",
            "Sistema Solar Fotovoltaico",
            "Instalações Elétricas",
            "SPDA (Sistemas de Proteção de Descargas Atmosféricas)",
            "Aterramento",
            "Grupo Gerador",
            "Cabeamento Estruturado",
            "Sistema de combate ao incêndio",
            "Eficiência Energética",
            "Laudo de inspeção Elétrica",
            "Laudo de Aterramento Elétrico",
            "Inspeção em PDA (Proteção de descargas Atmosféricas)",
            "Gestão de Energia",
            "Treinamento NR-10",
            "Prontuário de Instalação Elétrica",
            "LTCAT (Laudo Técnico das Condições do Ambiente de Trabalho)",
            "AET (Análise Ergonômica de Trabalho)",
            "PPRA (Programa de Prevenção de Risco Ambientais",
            "Acompanhamento de Perícias",
            "Laudos em Segurança do Trabalho",

        ];


        //Função autocomplete - Utilização JQuery UI Autocomplete
        $(document).ready(function () {
            $(function () {
                $("#buscaForm").autocomplete({
                    source: trabalhos

                });
            });


            // Mudança de cor do background do input quando foca e volta à cor normal quando sai. Usamos o focus e blur.
            $("input").focus(function () {
                $(this).css("background-color", "lemonchiffon")
            });
            $("select").focus(function () {
                $(this).css("background-color", "lemonchiffon")
            });
            $("input").blur(function () {
                $(this).css("background-color", " #e8f0fe ")
            });
            $("select").blur(function () {
                $(this).css("background-color", "#e8f0fe ")
            });
        });

        
         //validando E-mail ----------------------------------------
         function validacaoEmail(field) {
            usuario = field.value.substring(0, field.value.indexOf("@")); //antes do @
            dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length); // depois do @
            if ((usuario.length >=1) && 
                (dominio.length >=3) &&
                (usuario.search("@")==-1) && //usuario / dominio não pode conter @
                (dominio.search("@")==-1) && 
                (usuario.search(" ")==-1) && //usuario / dominio sem espaço em branco
                (dominio.search(" ")==-1) &&
                (dominio.search(".")!=-1) && //tem que ter ponto no dominio
                (dominio.indexOf(".") >=1)&&  // posição do 1° ponto tem que ser maior ou igual a 1 espaço, pois posição 0> deve ser ocupada por um caracter
                // tedm que ter caracter depois do ultimo ponto
                (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById("msgemail").innerHTML="<font color=' #092147  '>E-mail válido";
     
            }
            else{
            document.getElementById("msgemail").innerHTML="<font color='red'>Email inválido. Exemplo válido: joao@email.com</font>";
       
            }
            }
    