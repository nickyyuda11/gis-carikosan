<?php

namespace App\Models;

use CodeIgniter\Model;

class FotoKosModel extends Model
{
    protected $table      = 'foto_kos';
    protected $primaryKey = 'id_foto';

    protected $useAutoIncrement = true;
    protected $allowedFields = ['id_kos', 'nama_foto', 'deskripsi_foto', 'status_foto'];
}
