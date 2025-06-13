<template>
    <div style="width: 1200px; height:1200px">
        <!-- <CPinchZoom
            ref="pinch"
            :zoomControlScale="0.8"
            backgroundColor="rgba(255,255,255,1)"
            disableZoomControl="disable"
            :doubleTap="false"
            :wheel="true"
            @pinchZoomChange="pinchZoomChangeEvent"
        >
            <img src="./assets/11.jpg" @click.stop="disableClick">
        </CPinchZoom> -->
        <v-zoomer style="width: 500px; height: 500px; border: solid 1px silver;"
            :maxScale="3"
            :minScale="1"
            :zoomingElastic="false"
            :doubleClickToZoom="false"
            ref="zoomer"
            @change="onZoomChange"
            @zoom="onZoomChange"
            @pan="onZoomChange"
        >
            <img
                src="./assets/11.jpg"
                style="object-fit: contain; width: 100%; height: 100%;"
                @click.stop="disableClick"
            >
        </v-zoomer>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { CPinchZoom } from '../packages'
import VueZoomer from 'vue-zoomer'
@Component({
    components: {
        CPinchZoom,
        VZoomer: VueZoomer.Zoomer,
    },
})  
export default class myLib extends Vue {
    pinchZoomChangeEvent(attr:any){
        console.warn(attr,"返回数据")
    }
    disableClick(){
        console.warn("img点击",this.$refs.zoomer)
        return false
    }
    onZoomChange(trs:any){
        console.warn(trs)
    }
    onEvent(name:string,e:any){
        console.warn(name,e)
    }
}
</script>