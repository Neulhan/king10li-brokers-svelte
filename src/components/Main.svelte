<script>
  import { onMount } from "svelte";
  let mapContainer;

  onMount(() => {
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.561395332616, 127.04007787119096), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(mapContainer, options); //지도 생성 및 객체 리턴
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      var latlng = mouseEvent.latLng;

      var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
      message += "경도는 " + latlng.getLng() + " 입니다";

      console.log(message);
    });

    var markerPosition = new kakao.maps.LatLng(
      37.561395332616,
      127.04007787119096
    );

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      console.log(marker);
    });
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
