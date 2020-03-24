$(document).ready(function(){
  console.log("JQUERY LOADE MAH GURL")
  
  function secToMs(timeinSec) {
    return timeinSec * 1000;
  }
  
  function getDefaults(){
    return {
      animation : "slide-in",
      duration : "1",
      fill_mode : "backwards",
      iteration_count : "1",
      direction :"alternate",
      timing_function : "linear",
    }
  }

  function resetAnimation(){
    animationObj = getDefaults();
    //TODO: reset html values, && reset css values
  }

  function addChangeHandlers(){
    $('#animation-select').on('change', function() {
      animationObj.animation = this.value;
    });
  
    $('#duration').on('change', function() {
      animationObj.duration = this.value;
    });
  
    $('#fill-mode').on('change', function() {
      animationObj.fill_mode = this.value;
    });
  
    $('#iteration').on('change', function() {
      animationObj.iteration_count = this.value;
    });
  
    $('#direction').on('change', function() {
      animationObj.direction = this.value;
    });
  
    $('#timing').on('change', function() {
      animationObj.timing_function = this.value;
    });
  
    $('#iteration-infinite').on('change', function() {
      toggleIterationInfinite($('#iteration-infinite').prop('checked'));
    });
  }

  function toggleIterationInfinite(value){
    if(value){
      $('#iteration').attr('disabled', true)
      $("#iteration-txt").addClass("greyed")
      animationObj.iteration_count = "infinite";
    }else{
      $('#iteration').removeAttr('disabled', false)
      $("#iteration-txt").removeClass("greyed")
      animationObj.iteration_count = "1"
    }
  }
  
  let animationObj  = getDefaults();
  // let animation = defaults.animation;
  // let duration = defaults.duration;
  // let fill_mode = defaults.fill_mode;
  // let iteration_count = defaults.iteration_count;
  // let direction = defaults.direction;
  // let timing_function = defaults.timing_function;

  addChangeHandlers();

  $("#btn-reset").click(function(){
    resetAnimation();
  })

  //TO CORRECT
  $("#btn-try").click(function(){
    //will remove this once everything finished
    console.log("animation = " + animationObj.animation);
    console.log("duration = " + animationObj.duration);
    console.log("fill mode = " + animationObj.fill_mode);
    console.log("iteration = " + animationObj.iteration_count);
    console.log("direction = " + animationObj.direction);
    console.log("timing function = " + animationObj.timing_function);


    $("#blood-raven").css({
      "animation-duration" : animationObj.duration+"s",
      "animation-fill-mode" : animationObj.fill_mode,
      "animation-iteration-count" : animationObj.iteration_count,
      "animation-direction" : animationObj.direction,
      "animation-timing-function" : animationObj.timing_function
    });

    $("#blood-raven").addClass(animationObj.animation)

    if(animationObj.fill_mode === "backwards" && animationObj.iteration_count !== "infinite"){
      setTimeout(function(){
        $("#blood-raven").removeClass(animationObj.animation);
      }, secToMs(animationObj.duration));
    }
  })
});
