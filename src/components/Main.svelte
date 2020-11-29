<script>
  import Tab from "./Tab.svelte";
  import { onMount } from "svelte";
  import API from "../api.js";
  import { brokersStore, selectedBrokerStore } from "../stores/brokers.js";

  let mapContainer;

  onMount(async () => {
    const { brokers } = await API.get("/brokers/");
    $brokersStore = brokers;

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.55958619519764, 127.04120020979164), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new kakao.maps.Map(mapContainer, options); //지도 생성 및 객체 리턴

    const geocoder = new kakao.maps.services.Geocoder();
    for (let i = 0; i < brokers.length; i++) {
      geocoder.addressSearch(
      $brokersStore[i].address,
      (result, status) => {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });
          marker.key = $brokersStore[i].ID;
          kakao.maps.event.addListener(marker, "click", () => {
            // 마커 위에 인포윈도우를 표시합니다
            selectedBrokerStore.set(marker.key);
          });
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      }
    );
    }
  });
</script>

<style lang="scss">
  @import "../scss/_definition.scss";
  .container {
    width: 100%;
    height: 100%;
  }
</style>

<div id="map" class="container" bind:this={mapContainer} />
<Tab></Tab>