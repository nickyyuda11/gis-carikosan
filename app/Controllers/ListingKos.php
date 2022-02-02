<?php

namespace App\Controllers;

use App\Models\KosModel;
use App\Models\FotoKosModel;
use App\Models\SewaKosModel;

class ListingKos extends BaseController
{
    public function index()
    {
        $kos = new KosModel();
        $fotokos = new FotoKosModel();
        $sewakos = new SewaKosModel();
        $listKos = $kos->where(['status_kos' => 'aktif'])->paginate(4);
        $data['jumlahlistKos'] = count($kos->where(['status_kos' => 'aktif'])->findAll());

        foreach ($listKos as $dataKos) {
            $data['kos'][] = [
                'id_kos' => $dataKos['ID_KOS'],
                'nama_kos' => $dataKos['NAMA_KOS'],
                'kategori_kos' => $dataKos['KATEGORI_KOS'],
                'deskripsi_kos' => $dataKos['DESKRIPSI_KOS'],
                'kel_kos' => $dataKos['KEL_KOS'],
                'kec_kos' => $dataKos['KEC_KOS'],
                'kota_kos' => $dataKos['KOTA_KOS'],
                'lat_kos' => $dataKos['LAT_KOS'],
                'lng_kos' => $dataKos['LNG_KOS'],
                'sisa_kos' => $dataKos['SISA_KOS'],
                'foto_kos' => $fotokos->where('id_kos', $dataKos['ID_KOS'])->first(),
                'harga_kos' => $sewakos->where('id_kos', $dataKos['ID_KOS'])->first(),
            ];
        }
        echo view('home/includes/header.php');
        echo view('home/includes/menu.php');
        echo view('home/listing.php', $data);
        echo view('home/includes/footer.php');
    }

    public function onScrollLoadMore()
    {
        $limit = 4;
        $page = 4 * ($this->request->getVar('page') - 1);
        $limitPage = $limit * $this->request->getVar('page');
        $kec = $this->request->getVar('kec');
        $data['kos'] = $this->loadMoreData($page, $limitPage, $kec);
        echo view('home/load_kos', $data);
    }

    public function loadMoreDataMaps()
    {
        $limit = 4;
        $page = 0;
        $limitPage = $limit * $this->request->getVar('page');
        $kec = $this->request->getVar('kec');
        $data = $this->loadMoreData($page, $limitPage, $kec);
        echo json_encode($data);
    }

    function loadMoreData($page, $limitPage, $kec)
    {
        $kos = new KosModel();
        $fotokos = new FotoKosModel();
        $sewakos = new SewaKosModel();
        $builder = $kos->select('*')->where(['status_kos' => 'aktif'])->limit($limitPage, $page)->get()->getResultArray();

        foreach ($builder as $dataKos) {
            $data[] = [
                'id_kos' => $dataKos['ID_KOS'],
                'nama_kos' => $dataKos['NAMA_KOS'],
                'kategori_kos' => $dataKos['KATEGORI_KOS'],
                'deskripsi_kos' => $dataKos['DESKRIPSI_KOS'],
                'kel_kos' => $dataKos['KEL_KOS'],
                'kec_kos' => $dataKos['KEC_KOS'],
                'kota_kos' => $dataKos['KOTA_KOS'],
                'lat_kos' => $dataKos['LAT_KOS'],
                'lng_kos' => $dataKos['LNG_KOS'],
                'sisa_kos' => $dataKos['SISA_KOS'],
                'foto_kos' => $fotokos->where('id_kos', $dataKos['ID_KOS'])->first(),
                'harga_kos' => $sewakos->where('id_kos', $dataKos['ID_KOS'])->first(),
            ];
        }
        return $data;
    }
}
