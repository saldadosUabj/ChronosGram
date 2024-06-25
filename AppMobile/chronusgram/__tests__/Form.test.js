import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Form from '../scr/pages/tela_principal/Home/Forms/index'; 
import UserApi from '../scr/services/userAPI';

// Mock do UserApi
jest.mock('../scr/services/userAPI');

describe('Form Component', () => {
  it('deve renderizar os componentes principais corretamente', () => {
    const { getByText } = render(<Form NomeMetas="Teste" date="2024-04-10" />);
    
    expect(getByText('Exercício 14-25 - 1º Lei Termodinâmica')).toBeTruthy();
    expect(getByText('Vídeo Aula')).toBeTruthy();
  });

  it('deve abrir o modal ao clicar no card', async () => {
    const { getByText } = render(<Form NomeMetas="Teste" date="2024-04-10" />);
    
    const card = getByText('Exercício 14-25 - 1º Lei Termodinâmica');
    fireEvent.press(card);
    
    // Aguardar a abertura do modal
    await waitFor(() => {
      expect(getByText('Nome:')).toBeTruthy();
    });
  });

  it('deve chamar a API corretamente ao abrir o modal', async () => {
    const mockResponse = {
      data: JSON.stringify({
        nome: ['Teste Nome'],
        assunto: ['Teste Assunto'],
        status: ['Teste Status'],
        data_meta: ['2024-04-10'],
        material_estudo: ['Teste Material'],
        materia: ['Teste Matéria'],
        tempo_ate_meta: ['10 dias'],
        tempo_livre_estudo: ['2 horas'],
        tipo_material: ['Teste Tipo'],
        nota: ['10'],
        tempo_estudado: ['5 horas'],
        recomendacao: ['Teste Recomendação'],
        desgastes: ['Nenhum'],
        saida: ['Teste Saída'],
      }),
    };

    UserApi.mockImplementation(() => ({
      getMetas: jest.fn().mockResolvedValue(mockResponse),
    }));

    const { getByText } = render(<Form NomeMetas="Teste" date="2024-04-10" />);
    
    const card = getByText('Exercício 14-25 - 1º Lei Termodinâmica');
    fireEvent.press(card);
    
    // Aguardar a chamada à API e a abertura do modal
    await waitFor(() => {
      expect(UserApi().getMetas).toHaveBeenCalled();
      expect(getByText('Nome: Teste Nome')).toBeTruthy();
      expect(getByText('Status: Teste Status')).toBeTruthy();
    });
  });

  it('deve remover um card ao clicar no botão de remoção', () => {
    const { getByText, queryByText } = render(<Form NomeMetas="Teste" date="2024-04-10" />);
    
    const card = getByText('Exercício 14-25 - 1º Lei Termodinâmica');
    const removeButton = card.parentNode.findByType('button'); // Ajuste conforme necessário para encontrar o botão de remoção
    
    fireEvent.press(removeButton);
    
    expect(queryByText('Exercício 14-25 - 1º Lei Termodinâmica')).toBeNull();
  });

  it('deve retornar os dados corretamente ao chamar getMetas', async () => {
    const mockResponse = {
      data: JSON.stringify({
        nome: ['Teste Nome'],
        assunto: ['Teste Assunto'],
        status: ['Teste Status'],
        data_meta: ['2024-04-10'],
        material_estudo: ['Teste Material'],
        materia: ['Teste Matéria'],
        tempo_ate_meta: ['10 dias'],
        tempo_livre_estudo: ['2 horas'],
        tipo_material: ['Teste Tipo'],
        nota: ['10'],
        tempo_estudado: ['5 horas'],
        recomendacao: ['Teste Recomendação'],
        desgastes: ['Nenhum'],
        saida: ['Teste Saída'],
      }),
    };
  
    UserApi.mockImplementation(() => ({
      getMetas: jest.fn().mockResolvedValue(mockResponse),
    }));
  
    const { result, waitForNextUpdate } = renderHook(() => Form());
    await act(async () => {
      await result.current.getMetas();
      await waitForNextUpdate();
    });
  
    expect(result.current.nome).toBe('Teste Nome');
    expect(result.current.assunto).toBe('Teste Assunto');
  });
    
});
