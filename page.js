/// Inscreve o membro no canal
const channel = { name: 'new-property' };
realtime.subscribe(channel, newPropertyUploaded);

/// Recebe o Hook de mudança depois do afterUpdate
export async function newPropertyUploaded({ payload }) {
    if (payload.user === user) {

        await $w('#dbOrcamentos').refresh()
            .then(async () => {
                tot = await $w('#dbOrcamentos').getTotalCount();
                verNotify();
            })
    }
}

//// Monta a notificação
export async function verNotify() {

    /// verifica o que foi atualizado wixData.query....

                if (qntNotify > 0) {
                    
                    $w("#audioPlayer1").unmute();
                    $w("#audioPlayer1").play();
                    $w("#qntNotify").text = String(qntNotify);
                    $w("#boxQntNotify").show();
                }

                $w("#repeterNotify").onItemReady(($item2, itemData, index) => {
                    //// Monta o repeater para o box de notificações
                    
                });

    /// carrega novamente o repeater da página

    await leitura();
}