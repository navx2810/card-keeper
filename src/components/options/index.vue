<template>
    <div class="options">
        <h2 class="box">Options</h2>
        <dl class="box">
            <dt>Saves</dt>
            <dd class="box">
                <table>
                    <tr>
                        <td>Location</td>
                        <td>{{file.path}}</td>
                        <td class="btns"><p class="btn">Change</p></td>
                    </tr>
                    <tr>
                        <td>Autosave Time in mins. (0 means none)</td>
                        <td><input type="number" min=0 v-model="autoSaveTime" ></td>
                    </tr>
                </table>
            </dd>
        </dl>

        <dl class="box">
            <dt>Font</dt>
            <dd class="box">
                <table>
                    <tr>
                        <td>Size</td>
                        <td><input type="number" min=10 v-model.lazy="fontSize"></td>
                    </tr>
                </table>
            </dd>
        </dl>

    </div>
</template>


<script>
import {Component, Vue} from "vjs"
import Data from "yml-loader!lib/data.yml"
import { SetAutoSave } from "init"

@Component({
    name: "Options"
})
export default class extends Vue {

    get fontSize() { return Data.font.size }
    set fontSize(val) { Data.font.size = (val < 10) ? 10 : val }

    get autoSaveTime() { return Data.autosave.time }
    set autoSaveTime(val) { 
        Data.autosave.time = (val <= 0) ? 0 : val
        SetAutoSave(val)
        if(val < 1) { Data.messages.push("Autosaved was disabled.") }
    }

    get file() { return Data.file }

}
</script>

<style lang="stylus" scoped>
.options
    flex 1 1 auto
    font-size 1em

dt
    font-weight bold
    font-size 1.5em
dd
    padding 1em
    margin-left 1em
    flex 0 0 auto
td:first-child
    font-weight 800

td
    padding .25em .5em
td.btns
    text-align right

table
    width 100%

.btn
    color hsl(200 50 50)
    cursor pointer

input
    font-size 1.2em
    padding .5em
    color #fff
    text-align center
    border none
    background hsl(200 10 10)
h2
    text-align center
</style>