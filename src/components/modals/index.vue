<script>
import { Component, Vue } from "vjs"
import Modal from "./modal"
import Options from "components/options"
import CardViewer from "components/card-list/card-viewer"


@Component({
    name: "Modals",
    props: ["data"],
    components: { Modal, Options, CardViewer },
    functional: true
})
export default class extends Vue {

    render(h, ctx) {
        switch(ctx.props.data.route) {
            case ("/options"): return <Modal data={ctx.props.data}> <Options /> </Modal>
            case ("/card"): return <Modal data={ctx.props.data}> <CardViewer name={ctx.props.data.data.name} meta={ctx.props.data.data}/> </Modal>
            default: return null
        }

    }

}
</script>

<style lang="stylus">
.modal
    position fixed
    display flex
    justify-content center
    align-items center
    top 0
    left 0
    bottom 0
    right 0
    background hsla(200 10 10 .8)

</style>