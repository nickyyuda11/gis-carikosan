<?php

namespace App\Models;

use CodeIgniter\Model;

class SewaKosModel extends Model
{
    protected $table      = 'sewa_kos';
    protected $primaryKey = 'id_sewakos';

    protected $useAutoIncrement = true;
    protected $allowedFields = ['id_kos', 'harga_sewakos', 'type_sewakos', 'status_sewakos'];
}
