import { BuscaItemComponent } from '../busca-item.component';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { ItemService } from '../../../services/itemService/item.service';
import { ItemModule } from '../../../modules/item.module';
import { BuscaItemStub as stub } from './busca-item.stub';
import { of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';

describe('BuscaItemComponent', () => {
  let component: BuscaItemComponent;
  let fixture: ComponentFixture<BuscaItemComponent>;
  let itemService: ItemService;
  let toastrService: ToastrService;
  let modalService: BsModalService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ItemModule,
      ],
      providers: [
        { provide: ItemService, useClass: stub },
        { provide: ToastrService, useClass: stub },
        { provide: modalService, useClass: stub }
      ]
    })
      .compileComponents()
      .then(() => {
        itemService = TestBed.get(ItemService);
        toastrService = TestBed.get(ToastrService);
        modalService = TestBed.get(BsModalService);
        fixture = TestBed.createComponent(BuscaItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Dado que [buscaProduto] tenha sido chamada', () => {
    describe('Quando for passado um parametro valido com mais de 3 caracteres', () => {
      beforeEach(() => {
        spyOn(itemService, 'findByName').and.returnValue(of(stub.mockFindByNameRetorno()));
        spyOn(component, 'montaObjetoDoPostDetalhe');
        spyOn(component, 'goToTop');
        component.buscaProduto('abcd');
      });
      it('Então deve chamar a função [montaObjetoDoPostDetalhe]', () => {
        expect(component.montaObjetoDoPostDetalhe).toHaveBeenCalled();
      });
      it('Então deve chamar a função [goToTop]', () => {
        expect(component.goToTop).toHaveBeenCalled();
      });
    });
    describe('Quando for passado um parametro invalido com menos de 3 caracteres', () => {
      beforeEach(() => {
        spyOn(toastrService, 'toastrConfig').and.callFake(() => { });
        spyOn(toastrService, 'error').and.callFake(() => { });
        component.buscaProduto('a');
      });
      it('Então deve chamar a função [error]', () => {
        expect(toastrService.error).toHaveBeenCalled();
      });
    });
  });

  describe('Dado que [montaObjetoDoPostDetalhe] tenha sido chamada', () => {
    describe('Quando for passado um objeto (responseFindByName)', () => {
      beforeEach(() => {
        spyOn(component, 'getDetalhe');
        component.montaObjetoDoPostDetalhe(stub.mockFindByNameRetorno());
      });
      it('Então deve chamar a função [getDetalhe]', () => {
        expect(component.getDetalhe).toHaveBeenCalled();
      });
    });
  });

  describe('Dado que [getDetalhe] tenha sido chamada', () => {
    describe('Quando for passado um objeto (itemDetalhePost)', () => {
      beforeEach(() => {
        spyOn(itemService, 'findItemDetalhe').and.returnValue(of(stub.mockItemDetalheResponse()));
        spyOn(component, 'getEstoque');
        spyOn(component, 'getPreco');
        component.montaObjetoDoPostDetalhe(stub.mockFindByNameRetorno());
      });
      it('Então deve chamar a função [getEstoque]', () => {
        expect(component.getEstoque).toHaveBeenCalled();
      });
      it('Então deve chamar a função [getPreco]', () => {
        expect(component.getPreco).toHaveBeenCalled();
      });
    });
  });

  describe('Dado que [getEstoque] tenha sido chamada', () => {
    describe('Quando for chamada', () => {
      beforeEach(() => {
        component.listItemDetalheResponse = stub.mockItemDetalheResponse();
        spyOn(itemService, 'findEstoqueByCodigo').and.returnValue(of(stub.mockResponseEstoque()));
        component.getEstoque();
      });
      it('Então deve chamar a função [getEstoque]', () => {
        expect(component.getEstoque).toBeDefined();
      });
    });
  });

  describe('Dado que [getPreco] tenha sido chamada', () => {
    describe('Quando for chamada', () => {
      beforeEach(() => {
        component.listItemDetalheResponse = stub.mockItemDetalheResponse();
        spyOn(itemService, 'findPreco').and.returnValue(of(stub.mockResponsePreco()));
        spyOn(component, 'adicionaPrecoAndEstoqueNaLista');
        component.getPreco();
      });
      it('Então deve chamar a função [adicionaPrecoAndEstoqueNaLista()]', () => {
        expect(component.adicionaPrecoAndEstoqueNaLista).toBeDefined();
      });
    });
  });

  describe('Dado que [adicionaPrecoAndEstoqueNaLista] tenha sido chamada', () => {
    describe('Quando for chamada', () => {
      beforeEach(() => {
        component.listItemDetalheResponse = stub.mockItemDetalheResponse();
        component.listItemEstoqueResponse = stub.mockResponseEstoque();
        component.listItemPrecoResponse = stub.mockResponsePreco();
        component.adicionaPrecoAndEstoqueNaLista();
      });
      it('Então deve chamar a função [adicionaPrecoAndEstoqueNaLista()]', () => {
        expect(component.adicionaPrecoAndEstoqueNaLista).toBeDefined();
      });
    });
  });

  describe('Dado que [openModal] tenha sido chamada', () => {
    describe('Quando for chamada', () => {
      beforeEach(() => {
        spyOn(modalService, 'config').and.callFake(() => { });
        spyOn(modalService, 'show').and.callFake(() => { });
        component.openModal(stub.mockItemDetalheResponse());
      });
      it('Então deve chamar a função [modal service]', () => {
        expect(modalService.show).toHaveBeenCalled();
      });
    });
  });
});
