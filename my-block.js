wp.blocks.registerBlockType('kolokythas/testimonial', {
  title: 'Testimonial Block',
  icon: 'coffee',
  category: 'common',
  description: 'This is a custom block made by Konstantinos Kolokythas.',
  attributes: {
    name: {type: 'string'},
    position: {type: 'string'},
    content: {type: 'string'},
    imageURL: {type: 'string', source: 'attribute', attribute: 'src', selector: 'img'},
    imageID: {type: 'number'},
    imageALT: {type: 'string', source: 'attribute', attribute: 'alt', selector: 'img'}
  },

  style: 'file:./style.css',
  editorStyle: 'file:./index.css',

  example: {},

  edit: function(props){

    function updateName(event){
     props.setAttributes({name: event.target.value})
    }

    function updatePosition(event){
     props.setAttributes({position: event.target.value})
    }

    function updateContent(event){
      props.setAttributes({content: event.target.value})
    }

    function updateImage(img){
      props.setAttributes({imageURL: img.url, imageID: img.id, imageALT: img.alt})

    }

    return wp.element.createElement("div", {
  id: "test-form"
}, wp.element.createElement("p", null, wp.element.createElement("label", null, "Name Surname"), wp.element.createElement("input", {
  id: "name",
  value: props.attributes.name,
  onChange: updateName,
  type: "text",
  placeholder: "Enter your full name"
}), ), wp.element.createElement("p", null, wp.element.createElement("label", null, "Position"), wp.element.createElement("input", {
  id: "position",
  value: props.attributes.position,
  onChange: updatePosition,
  type: "text",
  placeholder: "Enter your position"
}), ), wp.element.createElement("p", null, wp.element.createElement("label", null, "Description"), wp.element.createElement("textarea", {
  name: props.attributes.content,
  onChange: updateContent,
  type: "text",
  rows: "10",
  cols: "50",
  placeholder: "Write something about you"
}), ), wp.element.createElement("p", null, wp.element.createElement(wp.editor.MediaUpload, {
  onSelect: updateImage,
  value: props.attributes.imageURL,
  render: ({
    open
  }) => wp.element.createElement(wp.components.Button, {
    style: { background: 'rgba(227, 80, 86, 1.0)', color: '#fff' },
    onClick: open
  }, "Select Image")
})),

wp.element.createElement("p", null, wp.element.createElement("img", {
  src: props.attributes.imageURL
}), )


);

},

  save: function(props){
    return wp.element.createElement("div", {
  class: "testimonial"
}, wp.element.createElement("figure", null, wp.element.createElement("img", {
  src: props.attributes.imageURL
})), wp.element.createElement("div", {
  id: "main-testimonial"
}, wp.element.createElement("div", null, wp.element.createElement("span", {
  class: "test-name"
}, props.attributes.name)), wp.element.createElement("div", null, React.createElement("span", {
  class: "test-position"
}, props.attributes.position)), wp.element.createElement("p", null, props.attributes.content)));


  }
})
