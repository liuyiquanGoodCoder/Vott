<template>
    <div id="canvasTiilsDiv">
        <div id="toolbarDiv"></div>
        <div id="selectionDiv">
            <div id="editorDiv"></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'vott',
  components: {
  },
  mounted(){
    const editorContainer = document.getElementById("editorDiv");
    const toolbarContainer = document.getElementById("toolbarDiv");

    let editor = new CanvasTools.Editor(editorContainer).api;
  }
}
</script>
