<?php

namespace App\Models;

use CodeIgniter\Model;

class KosModel extends Model
{
    protected $table      = 'kos';
    protected $primaryKey = 'id_kos';

    protected $useAutoIncrement = true;
    protected $allowedFields = ['nama_kos', 'kategori_kos', 'deskripsi_kos', 'kel_kos', 'kec_kos', 'kota_kos', 'lat_kos', 'lng_kos', 'status_kos'];
}
