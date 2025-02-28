$('.search-button').on('click', function(){

    let keyword = $('.input-keyword').val();

    if(keyword === ''){
        $('.movie-container').html('<p class="text-danger">Please enter a movie name.</p>')
        return;
    }


    $.ajax({
    url: 'http://www.omdbapi.com/?apikey=67d69803&s='+ keyword,
    success: results => {
        const movies = results.Search;
        
        if (!movies) {
            $('.movie-container').html('<p class="text-danger text-center fs-5 fw-bold">No movies found.</p>');
            return;
        }
        

        let cards = '';
        movies.forEach(mov =>{
            cards += showCards(mov);
        });
        $('.movie-container').html(cards);

        $('.modal-detail-button').on('click',function(){
            $('.modal-body').html('<p class="text-center">Loading...</p>');
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=67d69803&i='+ $(this).data('imdbid'),
                success: res => {
                    const movieDetail = showDetail(res);
            $('.modal-body').html(movieDetail);
                },
                error: (e) =>{
                    //Jika ERROR
                    console.log(e.responseText);
                }
            });
        });
    },
    error: (e) =>{
        //Jika ERROR
        console.log(e.responseText);
    }
    });
});

// Detect "Enter" key press on the input field
$('.input-keyword').on('keypress', function(e){
    if(e.which == 13){ // 13 is the keycode for "Enter"
        $('.search-button').click();
    }
});

// --------------- Flush previous data ------------------
// $('#movieDetailModal').on('hidden.bs.modal', function(){
//     $('.modal-body').html(''); // Clear previous data
// });





function showCards(mov){
    return ` <div class="col-md-4 my-3">
                  <div class="card h-100 shadow-lg" style="height: 500px;">
                     <img src="${mov.Poster}" class="card-img-top img-fluid" style="height: 300px; object-fit: cover;">
                     <div class="card-body d-flex flex-column">
                       <h5 class="card-title">${mov.Title}</h5>
                       <h6 class="card-subtitle mb-2 text-muted">${mov.Year}</h6>
                       <a href="#" class="btn btn-primary mt-auto modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid=${mov.imdbID}>Show Details</a>
                     </div>
                 </div>
             </div>`;
 }
 


function showDetail(res){
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${res.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${res.Title} (${res.Year})</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${res.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${res.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${res.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br>${res.Plot}</li>
                          </ul>
                    </div>
                </div>
            </div>`;
        
}