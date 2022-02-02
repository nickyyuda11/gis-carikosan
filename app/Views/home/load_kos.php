<?php foreach ($kos as $dataKos) {
    echo '
                    <div class="strip map_view add_top_20">
                    <div class="row no-gutters">
                        <div class="col-4">
                            <figure>
                                <a href="detail-restaurant.html"><img src="/img/' . $dataKos['foto_kos']['NAMA_FOTO'] . '" class="img-fluid" alt=""></a>
                                <small>' . $dataKos['kategori_kos'] . '</small>
                            </figure>
                        </div>
                        <div class="col-8">
                            <div class="wrapper">
                                <a href="#0" class="wish_bt"></a>
                                <h3><a href="detail-restaurant.html">' . $dataKos['nama_kos'] . '</a></h3>
                                <small>Rp ' . $dataKos['harga_kos']['HARGA_SEWAKOS'] . '</small>
                            </div>
                            <ul>
                                <li><span class="loc_open">' . $dataKos['sisa_kos'] . '</span></li>
                                <li>
                                    <div class="score"><span>Superb<em>350 Reviews</em></span><strong>8.9</strong></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                ';
}
