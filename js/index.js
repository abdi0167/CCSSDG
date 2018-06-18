function main() {

    //PARALAX JQUERY SELECTOR
    $(this).paroller()
    /*--------------------------------------------*/
    //MODALS 
    //GENERAL COUNSELLING POPUP
    $(this).ready(function () {

        $("#gcBtn").click(function () {
            $("#gcModal").modal();
        });

        $("#vawBtn").click(function () {
            $("#vawModal").modal();
        });

        $("#eapBtn").click(function () {
            $("#eapModal").modal();
        });

        $("#parBtn").click(function () {
            $("#parModal").modal();
        });




    });
}
/*--------------------------------------------*/




$(document).ready(main);
