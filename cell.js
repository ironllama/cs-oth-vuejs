import { createApp, defineProps, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

export default {
  props: ['next', 'col', 'row'],
  setup(props) {  // Don't forget to include props argument!
    // const props = defineProps(['next']);  // The defineProps doesn't seem to work with CDN.
    // const props = defineProps({next: function,});
    
    const mark = ref(null)

    function pushIt() {
      if (mark.value === null) mark.value = props.next(props.col, props.row);
    }

    return {
      mark,
      pushIt,
    }
  },
  template: '<div class="cell" @click="pushIt">{{ mark }}</div>',
}