feature1 = document.getElementsByClassName('feature-1')[0]
feature2 = document.getElementsByClassName('feature-2')[0]
feature3 = document.getElementsByClassName('feature-3')[0]
feature4 = document.getElementsByClassName('feature-4')[0]

function blurred(feature){
    feature.style.fransform = 'scale(1.05)'
    feature.style.transition = '.5 ease'
    for(i=0; i<Array.length; i++){
        arr[i].style.filter = "blur(5px)"
        arr[i].style.transition = '.5s ease'
    }
}

function unBlurred(feature){
    feature.style.fransform = 'scale(1)'
    feature.style.transition = '.5 ease'
    for(i=0; i<Array.length; i++){
        arr[i].style.filter = "blur(0px)"
        arr[i].style.transition = '.5s ease'
    }
}




