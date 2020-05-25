<?php namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddMovieTable extends Migration
{
	public function up()
	{
		$this->forge->addField([
			'id'          => [
					'type'           => 'INT',
					'constraint'     => 11,
					'unsigned'       => TRUE,
					'auto_increment' => TRUE
			],
			'title'       => [
					'type'           => 'VARCHAR',
					'constraint'     => '300',
			],
			'overview' => [
					'type'           => 'TEXT',
					'null'           => TRUE,
			],
			'release_date' => [
					'type' => 'DATE'
			],
			'backdrop_path' => [
				'type' => 'VARCHAR',
				'constraint' => '100'
			]
		]);
		$this->forge->addKey('id', TRUE);
		$this->forge->createTable('movies');
	}

	//--------------------------------------------------------------------

	public function down()
	{
		$this->forge->dropTable('movies');
	}
}
