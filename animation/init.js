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

  function resetHTMLValues(){
    const defaultValues = getDefaults();
    $("#animation-select").val(defaultValues.animation);
    $("#duration").val(defaultValues.duration);
    $("#fill-mode").val(defaultValues.fill_mode);
    $("#iteration").val(defaultValues.iteration_count);
    $("#iteration-infinite").prop('checked', false);
    $('#iteration').removeAttr('disabled', false)
    $("#iteration-txt").removeClass("greyed")
    $("#direction").val(defaultValues.direction);
    $("#timing").val(defaultValues.timing_function);

  }

  function resetAnimation(){
    animationObj = getDefaults();
    $("#blood-raven").removeClass();
    applyAnimCSS(animationObj, false);
    resetHTMLValues();
  }

  function applyAnimCSS(animObj, playAnim){
    $("#blood-raven").css({
      "animation-duration" : animObj.duration+"s",
      "animation-fill-mode" : animObj.fill_mode,
      "animation-iteration-count" : animObj.iteration_count,
      "animation-direction" : animObj.direction,
      "animation-timing-function" : animObj.timing_function
    });

    if(playAnim){
      $("#blood-raven").addClass(animObj.animation)
    }
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

  function getCurrentAnimKeyframe(animation){
    return `
    @keyframes slide-in {\n
      \t 0% { transform: translate(-400px); }\n
      \t 100% { transform: translate(0px); }\n
    }
    `
  }

  function exportTo(){
    let cssExport = `
    .exportedAnim { \n
      \t animation: ${animationObj.animation};\n
      \t animation-duration: ${animationObj.duration}s;\n
      \t animation-fill-mode: ${animationObj.fill_mode};\n
      \t animation-iteration-count: ${animationObj.iteration_count};\n
      \t animation-direction: ${animationObj.direction}; \n
      \tanimation-timing-function: ${animationObj.timing_function};\n
    }\n
    
    ${getCurrentAnimKeyframe(animationObj.animation)}
    `
    $("#export-content").html(cssExport);
    displayExportMd();
  }
  
  function displayExportMd(){
    // $("#export-md").css('visibility', 'visible');
    $("#export-md").removeClass('outcoming-md');
    $("#export-md").addClass('incoming-md');

  }

  function hideDisplayMd(){
    // $("#export-md").css('visibility', 'hidden');
    $("#export-md").removeClass('incoming-md');
    $("#export-md").addClass('outcoming-md');

  }
  
  let animationObj  = getDefaults();
  addChangeHandlers();
  
  $("#btn-reset").click(function(){
    resetAnimation();
  })

  $("#btn-export").click(function(){
    exportTo();  
  })

  $("#export-close").click(function(){
    hideDisplayMd();  
  })

  $("#btn-try").click(function(){
    applyAnimCSS(animationObj, true);

    if(animationObj.fill_mode === "backwards" &&
      animationObj.iteration_count !== "infinite" &&
      animationObj.iteration_count < 2){
      setTimeout(function(){
        $("#blood-raven").removeClass(animationObj.animation);
      }, secToMs(animationObj.duration));
    }
  })
});


//TODO: Add more animations, add more options in options, do the export