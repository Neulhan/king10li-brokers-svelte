<script>
    import { brokersStore, selectedBrokerStore } from "../stores/brokers.js";

    let broker;

    selectedBrokerStore.subscribe(() => {
        const find = $brokersStore.filter(b => b.ID === $selectedBrokerStore)
        broker = find.length ? find[0] : undefined;
        console.log(broker);
    })
</script>

<style lang="scss">
    @import "../scss/_definition.scss";
    .tab {
        background-color: white;
        width: 440px;
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1;
        box-shadow: 3px 6px 12px rgba(0,0,0,0.4);
        padding: 40px;
        overflow: hidden;
        .home {
            font-size: 44px;
            width: 100%;
            font-weight: 500;
            word-break: keep-all;
        }

        .tags {
            display: flex;
            .tag {
                padding: 4px 8px;
                background-color: $yellow;
                border-radius: 2px;
            }
        }

        .title {
            font-weight: 500;
            font-size: 28px;
            
        }
        .phone-number {
            color: $gray-500;
        }

        .image {
            width: 100%;
            padding-bottom: 65%;
            background-color: $gray-100;    
        }
    }
</style>
<div class="tab">
    {#if $selectedBrokerStore}
        {#if broker}
            <div class="tags">
                <div class="tag">{broker.status}</div>
            </div>
            <div class="title">{broker.name}</div>
            <div class="phone-number">{broker.phoneNumber}</div>
            <div class="image"></div>
            <div class="address">{broker.address} {broker.addressDetail}</div>
        {/if}
    {:else}
        <div class="home">지도에서 공인중개사를 찾아보세요!</div>
    {/if}
</div>
