from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_create_user():
    response = client.post("/users/", json={
        "id": 3,
        "nome": "Test User",
        "turno_livre": "noite",
        "tipo": "puxado",
        "email": "testuser@example.com",
        "senha": "password123"
    })
    assert response.status_code == 200
    assert response.json()["email"] == "testuser@example.com"

def test_read_users():
    response = client.get("/users/")
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_read_user():
    response = client.get("/users/1")
    assert response.status_code == 200
    assert response.json()["id"] == 1

def test_update_user():
    response = client.put("/users/1", json={
        "nome": "Updated User",
        "turno_livre": "tarde",
        "tipo": "casual",
        "email": "updateduser@example.com",
        "senha": "newpassword123"
    })
    assert response.status_code == 200
    assert response.json()["nome"] == "Updated User"

def test_delete_user():
    response = client.delete("/users/1")
    assert response.status_code == 200
    assert response.json()["id"] == 1

def test_create_tarefa():
    response = client.post("/tarefas/", json={
        "id": 2,
        "meta": "New Task",
        "data_meta": "2024-07-01",
        "nome": "Task Work",
        "status": 1,
        "assunto": "Study",
        "material_estudo": "Notes",
        "materia": "Math",
        "tempo_ate_meta": 5,
        "tipo_material": 1,
        "nota": 10,
        "tempo_estudado": 2,
        "indice_facilidade_disciplina": 5,
        "recomendacoes": 3,
        "desgastes": 1,
        "saida": 88.5
    })
    assert response.status_code == 200
    assert response.json()["nome"] == "Task Work"

def test_read_tarefas():
    response = client.get("/tarefas/")
    assert response.status_code == 200
    assert len(response.json()) > 0

def test_read_tarefa():
    response = client.get("/tarefas/1")
    assert response.status_code == 200
    json_response = response.json()
    assert "id" in json_response  
    assert json_response["id"] == 1

def test_update_tarefa():
    response = client.put("/tarefas/1", json={
        "meta": "Updated Task",
        "data_meta": "2024-07-10",
        "nome": "Updated Task Work",
        "status": 2,
        "assunto": "Advanced Study",
        "material_estudo": "Textbooks",
        "materia": "Science",
        "tempo_ate_meta": 7,
        "tipo_material": 2,
        "nota": 8,
        "tempo_estudado": 5,
        "indice_facilidade_disciplina": 6,
        "recomendacoes": 4,
        "desgastes": 2,
        "saida": 90.0
    })
    assert response.status_code == 200
    assert response.json()["meta"] == "Updated Task"

def test_delete_tarefa():
    client.post("/tarefas/", json={
        "id": 1,
        "meta": "Task to Delete",
        "data_meta": "2024-07-01",
        "nome": "Task Work",
        "status": 1,
        "assunto": "Study",
        "material_estudo": "Notes",
        "materia": "Math",
        "tempo_ate_meta": 5,
        "tipo_material": 1,
        "nota": 10,
        "tempo_estudado": 2,
        "indice_facilidade_disciplina": 5,
        "recomendacoes": 3,
        "desgastes": 1,
        "saida": 88.5
    })
    response = client.delete("/tarefas/1")
    assert response.status_code == 200
    json_response = response.json()
    assert "id" in json_response  
    assert json_response["id"] == 1