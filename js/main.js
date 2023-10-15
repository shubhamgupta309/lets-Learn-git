/*
$(document).ready(function() {
    // Initialize select2 on the initial multi-select element
    $('#dynamic-multiselect').select2();

    // Function to update multi-select options via AJAX
    function updateOptions() {
        $.ajax({
            url: 'ajax/ajax_handler.php',
            type: 'POST',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var select = $('#dynamic-multiselect');

                // Clear existing options
                select.empty();

                // Append new options
                data.forEach(function(option) {
                    select.append(new Option(option.name, option.age, false, false));
                });

                // Re-initialize select2 after updating options
                select.select2();

                // console.log($('#dynamic-multiselect').val());
            }
        });
    }

    // Call the updateOptions function to populate the multi-select
    updateOptions();
});*/
$(document).ready(function(){

    $("#dynamic-multiselect").select2({
        ajax: { 
            url:'ajax/ajax_handler.php',
            type: "post",
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    searchTerm: params.term, // search term
                    ajax_action : "ajax/get_dynamic_select_dropdown"
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });
   });

//    dynamic_searching.php
/*
$('#my-select').select2({
    placeholder: 'Select an option', // Placeholder text
    minimumInputLength: 2, // Minimum input length before triggering AJAX
    ajax: {
        url: 'ajax/ajax_handler.php', // Your PHP file that fetches data
        dataType: 'json',
        delay: 250, // Delay in milliseconds before sending the request
        data: function (params) {
            return {
                q: params.term,
                ajax_action : "ajax/get_dynamic_Searching"
            };
        },
        processResults: function (data) {
            return {
                results: data // Processed results from your PHP file
            };
        },
        cache: true // Cache the results
    }
});*/

$(document).ready(function() {
    var select2Element = $('#my-select');

    select2Element.select2({
        placeholder: 'Select an option',
        minimumInputLength: 2,
        ajax: {
            url: 'ajax/ajax_handler.php',
            dataType: 'json',
            delay: 250,
            data: function(params) {
                return {
                    q: params.term
                };
            },
            processResults: function(data) {
                return {
                    results: data
                };
            },
            cache: true
        }
    });

    // Add keyup event handler to the search input of the Select2 dropdown
    select2Element.on('select2:open', function() {
        
        // alert(12);
        var searchInput = $(this).parent().find('.select2-search__field');
        console.log(searchInput);
        searchInput.on('keyup', function() {
            var term = $(this).val();
            
            // If the term length is greater than or equal to the minimumInputLength,
            // trigger the 'query' event to perform the AJAX call
            if (term.length >= select2Element.select2('options').options.minimumInputLength) {
                select2Element.select2('trigger', 'query', {term: term});
            }
        });
    });
});





//    End dynamic_searching.php

  

